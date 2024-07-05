import { RiPagesLine } from 'react-icons/ri';
import Blocks from './blocks';
import { defineType, defineField, defineArrayMember } from 'sanity';

const blockList = Blocks.map((block) => {
	return { type: block.name}
})

export const page = defineType({
	name: 'page',
	title: 'page',
	type: 'document',
	icon: RiPagesLine,
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
			options: {
				source: 'title',
				maxLength: 30,
			},
			description: 'Custom slugs are generally not recommended, use the generate option.',
			validation: (Rule) => Rule.required()
		}),
		defineField({
			title: 'Blocks',
			name: 'blocks',
			type: 'array',
			of: blockList,
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