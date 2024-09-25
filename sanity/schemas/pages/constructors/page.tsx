import { blockTypes } from "@/sanity/schemas/pages/blocks";
import { camelCaseToWords } from "@lib/stringFunctions";
import { IconType } from "react-icons";
import { defineField, defineType, FieldDefinition } from "sanity";
// import { blockTypes } from './blocks';
type fields = FieldDefinition<"string" | "number" | "boolean" | "object" | "array" | "block" | "date" | "datetime" | "document" | "file" | "geopoint" | "image" | "reference" | "crossDatasetReference" | "slug" | "text" | "url" | "email" | "color", undefined>[]

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
				title: 'Sections',
				name: 'sections',
				type: 'array',
				of: [{ type: 'section' }],
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