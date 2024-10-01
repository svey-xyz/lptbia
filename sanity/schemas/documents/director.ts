import { TbChairDirector } from "react-icons/tb";
import { defineType, defineField, defineArrayMember } from "sanity";
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export const director = defineType({
	type: 'document',
	name: 'director',
	title: 'Director',
	orderings: [orderRankOrdering],
	fields: [
		orderRankField({ type: "category", newItemPosition: "before" }),
		defineField({
			title: 'Name',
			name: 'name',
			type: 'string',
			validation: Rule => Rule.required()
		}),
		defineField({
			title: 'Position',
			name: 'position',
			type: 'string',
		}),
		defineField({
			name: 'businesses',
			title: 'Businesses',
			type: 'array',
			of: [{
				type: 'reference',
				to: [{ type: 'business', }],
				options: {
					disableNew: true,
				},
			}]	
		}),
		defineField({
			name: 'contact',
			type: 'contact',
		}),
	],
	icon: TbChairDirector
})