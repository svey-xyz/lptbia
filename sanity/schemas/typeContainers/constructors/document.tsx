import { taxonomyType } from "@/sanity/schemas/typeContainers/constructors/container";
import { camelCaseToWords } from "@lib/stringFunctions";
import { FaCircleInfo } from "react-icons/fa6";
import { defineArrayMember, defineField, defineType, FieldGroupDefinition } from "sanity";
import { args } from './container'

const GROUPS: FieldGroupDefinition[] = [
	{
		name: 'about',
		title: 'About',
		default: true,
		icon: FaCircleInfo,
	},
]

const FIELDS = (taxonomicTerm: string) => {
	return [
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
			of: [{type: 'block'}],
			group: 'about',
		}),
		defineField({
			title: 'Taxonomies',
			name: 'taxonomies',
			type: 'array',
			of: [defineArrayMember({ type: taxonomicTerm })],
			group: 'about',
		}),
	]
}

export const document = (args: args) => {
	const { type, icon, fields, groups } = args

	return defineType({
		title: camelCaseToWords(type),
		name: type,
		type: 'document',
		icon: icon,
		groups: [
			...GROUPS,
			...(groups || [])
		],
		fields: [
			...FIELDS(taxonomyType(type)),
			...fields || [],
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