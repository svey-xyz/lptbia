import { defineType, defineField, defineArrayMember } from 'sanity';
import { } from 'react-icons';
import { mediaAssetSource } from 'sanity-plugin-media';

import constructors from '@/sanity/lib/constructors';

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

export const NewsFeature = constructors.block({ name: 'NewsFeature', fields })