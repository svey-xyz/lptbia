import { fields } from "@/sanity/schemas/pages/constructors";
import { blockTypes } from "@/sanity/schemas/pages/blocks";
import { camelCaseToWords } from "@lib/stringFunctions";
import { IconType } from "react-icons";
import { defineField, defineType } from "sanity";
// import { blockTypes } from './blocks';

export const page = (args: { name: string, fields?: fields, icon?: IconType | undefined }) => {
	const { name, icon, fields } = args
	const generatedFields = fields?.map(field => {
		return field
	})
	const customPageFields = generatedFields ? generatedFields : []

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
				title: 'Description',
				name: 'description',
				type: 'array',
				of: [{ type: 'block' }],
			}),
			defineField({
				title: 'Blocks',
				name: 'blocks',
				type: 'array',
				of: blockTypes,
			}),
			...customPageFields,
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