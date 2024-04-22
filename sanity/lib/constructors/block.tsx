import { fields } from "@/sanity/lib/constructors";
import { camelCaseToWords } from "@lib/stringFunctions";
import { defineType, defineField, PreviewConfig } from "sanity";
import { mediaAssetSource } from "sanity-plugin-media";

export function block(
	args: {
		name: string,
		fields?: fields,
		preview?: PreviewConfig<{
			title: string;
			image: string;
		}, any> | undefined
	}) {
	const { name, fields, preview } = args
	const generatedFields = fields?.map(field => {
		return field
	})
	const fieldsArray = generatedFields ? generatedFields : []

	return defineType({
		title: camelCaseToWords(name),
		name: name,
		type: 'object',
		fields: [
			defineField({
				name: 'backdrop',
				title: 'Backdrop',
				type: 'string',
				options: {
					list: [
						{ title: 'Video', value: 'video'},
						{ title: 'Image', value: 'image' },
						{ title: 'Colour', value: 'colour' },
					]
				}
			}),
			defineField({
				name: 'video',
				title: 'Video',
				type: 'string',
				description: '',
				hidden: ({ parent, value }) => !value && parent?.backdrop !== 'video',
			}),
			defineField({
				title: 'Image',
				name: 'image',
				type: 'image',
				options: {
					sources: [mediaAssetSource],
				},
				preview: {
					select: {
						asset: 'asset',
						title: 'asset.title',
						description: 'asset.description'

					},
					prepare(value: any) {
						return {
							title: value.title ? value.title : 'Untitled Image',
							subtitle: value.description,
							media: value.asset
						}
					}
				},
				hidden: ({ parent, value }) => !value && parent?.backdrop !== 'image',
			}),
			defineField({
				name: 'colour',
				title: 'Colour',
				type: 'string',
				description: '',
				options: {
					list: [
						{ title: 'Accent', value: 'accent' },
					],
				},
				hidden: ({ parent, value }) => !value && parent?.backdrop !== 'colour',
			}),
			...fieldsArray
		],
		preview,
	})
}