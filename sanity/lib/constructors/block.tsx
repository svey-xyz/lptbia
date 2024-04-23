import { fields } from "@/sanity/lib/constructors";
import { camelCaseToWords } from "@lib/stringFunctions";
import { IconType } from "react-icons";
import { defineType, defineField, PreviewConfig } from "sanity";
import { mediaAssetSource } from "sanity-plugin-media";
import { RxSection } from "react-icons/rx";

export function block(
	args: {
		name: string,
		fields?: fields,
		// preview?: PreviewConfig<{
		// 	title: string;
		// 	image: string;
		// }, any> | undefined
		icon?: IconType | undefined
	}) {
	const { name, fields, icon } = args
	const generatedFields = fields?.map(field => {
		return field
	})
	const fieldsArray = generatedFields ? generatedFields : []

	return defineType({
		title: camelCaseToWords(name),
		name: name,
		type: 'object',
		icon,
		fields: [
			defineField({
				name: 'containerType',
				title: 'Container Type',
				type: 'string',
				options: {
					list: [
						{ title: 'Standard', value: 'Standard' },
						{ title: 'Colour', value: 'Colour' },
						{ title: 'Image', value: 'Image' },
						{ title: 'Video', value: 'Video'},
					],
					layout: 'radio',
				},
				initialValue: 'Standard',
				validation: Rule => Rule.required()
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
		preview: {
			select: {
				type: '_type',
				// logo: 'logo',
			},
			prepare(value: any) {
				const { type, logo } = value
				return {
					title: type ? camelCaseToWords(type) : 'Unknown Block Type',
					media: icon ? icon : RxSection,
				}
			},
		},
	})
}