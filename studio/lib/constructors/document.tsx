import { fields } from "@/studio/lib/constructors";
import { camelCaseToWords } from "@lib/stringFunctions";
import { IconType } from "react-icons";
import { defineArrayMember, defineField, defineType } from "sanity";
import { mediaAssetSource } from "sanity-plugin-media";

export function document(args: { name: string, taxonomicTerm: string, fields?: fields, icon?: IconType | undefined }) {
	const { name, icon, fields, taxonomicTerm } = args
	const generatedFields = fields?.map(field => {
		return field
	})
	const fieldsArray = generatedFields ? generatedFields : []

	return defineType({
		title: camelCaseToWords(name),
		name: name,
		type: 'document',
		icon: icon,
		fields: [
			defineField({
				title: 'Title',
				name: 'title',
				type: 'string',
			}),
			defineField({
				title: 'Image',
				name: 'image',
				type: 'image',
				description: 'Featured image.',
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
			}),
			defineField({
				title: 'Date',
				name: 'date',
				type: 'basicDate',
				description: 'This can be the date of creation, the date of publication, etc.'
			}),
			defineField({
				title: 'Location',
				name: 'location',
				type: 'location',
			}),
			defineField({
				title: 'Taxonomies',
				name: 'taxonomies',
				type: 'array',
				of: [defineArrayMember({ type: taxonomicTerm })],
			}),
			defineField({
				title: 'Links',
				name: 'links',
				type: 'array',
				of: [
					defineArrayMember({
						type: 'link',
					})
				],
			}),
			...fieldsArray
		],
		preview: {
			select: {
				title: 'title',
				image: 'image',
			},
			prepare(value: any) {
				const { title, image } = value
				return {
					title: title ? title : 'Untitled',
					media: image ? image : icon
				}
			}
		},
	})	

}