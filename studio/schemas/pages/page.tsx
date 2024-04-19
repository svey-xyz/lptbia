import { defineType, defineField, defineArrayMember } from 'sanity';

export const page = defineType({
	name: 'page',
	title: 'page',
	type: 'document',
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string'
		}),
		defineField({
			title: 'Slug',
			name: 'slug',
			type: 'slug',
		}),
		defineField({
			title: 'Blocks',
			name: 'blocks',
			type: 'array',
			of: [
				{ type: 'FeaturedTaxonomies' }
			]
		})
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare(value: any) {
			const { title } = value;
			return {
				title: title ? title : 'Untitled Document'
			}
		}
	}
})