import { taxonomyType } from "@/sanity/schemas/typeContainers/constructors/container";
import { camelCaseToWords } from "@lib/stringFunctions";
import { FaCircleInfo } from "react-icons/fa6";
import { defineArrayMember, defineField, defineType, FieldGroupDefinition } from "sanity";
import { args } from './container'
import { IconType } from "react-icons";

const GROUPS: FieldGroupDefinition[] = [
	{
		name: 'about',
		title: 'About',
		default: true,
		icon: FaCircleInfo,
	},
]

const TaxonomiesField = (taxonomicTerm: string) => {
	return (
		defineField({
			title: 'Taxonomies',
			name: 'taxonomies',
			type: 'array',
			of: [defineArrayMember({ type: taxonomicTerm })],
			group: 'about',
		})
	)
}

const FIELDS = [
	defineField({
		title: 'Title',
		name: 'title',
		type: 'string',
		group: 'about',
	}),
	defineField({
		title: 'Description',
		name: 'description',
		type: 'array',
		of: [{ type: 'block' }],
		group: 'about',
	}),

]

const PREVIEW = (icon?: IconType) => {
	return {
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
	}
}

export const document = (args: args) => {
	const { type, icon, fields, groups } = args
 	let documentFields = [
		...FIELDS,
		...fields || [],
	]
	if (args.taxonomies) documentFields.push(TaxonomiesField(taxonomyType(type)))

	const documentPreview = args.customPreview || PREVIEW(icon)

	return defineType({
		title: camelCaseToWords(type),
		name: type,
		type: 'document',
		icon: icon,
		groups: [
			...GROUPS,
			...(groups || [])
		],
		fields: documentFields,
		preview: documentPreview,
	})
}