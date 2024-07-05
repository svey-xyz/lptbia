import { fields } from "@/sanity/lib/types";
import { taxonomyType } from "@/sanity/schemas/typeContainers/constructors/container";
import { camelCaseToWords } from "@lib/stringFunctions";
import { IconType } from "react-icons";
import { defineArrayMember, defineField, defineType } from "sanity";

const documentBaseFields = (taxonomicTerm: string) => {
	return [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
		}),
		defineField({
			title: 'Description',
			name: 'description',
			type: 'array',
			of: [{type: 'block'}],
		}),
		defineField({
			title: 'Taxonomies',
			name: 'taxonomies',
			type: 'array',
			of: [defineArrayMember({ type: taxonomicTerm })],
		}),
	]
}

export const document = (args: { name: string, fields?: fields, icon?: IconType | undefined }) => {
	const { name, icon, fields } = args
	const generatedFields = fields?.map(field => {
		return field
	})
	const customDocumentFields = generatedFields ? generatedFields : []

	return defineType({
		title: camelCaseToWords(name),
		name: name,
		type: 'document',
		icon: icon,
		fields: [
			...documentBaseFields(taxonomyType(name)),
			...customDocumentFields,
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