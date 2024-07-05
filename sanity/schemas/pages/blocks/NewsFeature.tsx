import { defineType, defineField, defineArrayMember } from 'sanity';
import constructors from '@/sanity/lib/constructors';
import { MdWebStories } from 'react-icons/md';

const fields = [
	defineField({
		title: 'Title',
		name: 'title',
		type: 'string',
	}),
	defineField({
		title: 'News',
		name: 'news',
		type: 'array',
		of: [
			{
				type: 'reference',
				to: [{type: 'news'}],
				options: {
					disableNew: true,
				}
			}
		]
	}),
]

export const NewsFeature = constructors.block({ name: 'NewsFeature', fields, icon: MdWebStories })