import { defineType, defineField, defineArrayMember } from 'sanity';
import { } from 'react-icons';
import { mediaAssetSource } from 'sanity-plugin-media';

import constructors from '@/sanity/schemas/pages/constructors';
import { BsJournalRichtext } from 'react-icons/bs';

const fields = [
	defineField({
		title: 'Text',
		name: 'text',
		type: 'array',
		of: [
			{type: 'block'},
		],
	}),
	defineField({
		title: 'Featured Image',
		name: 'featuredImage',
		type: 'image',
		options: {
			sources: [mediaAssetSource],
		},
		preview: {
			select: {
				asset: 'asset',
				title: 'asset.title',
				description: 'asset.description',
			},
			prepare(value: any) {
				return {
					title: value.title ? value.title : 'Untitled Image',
					subtitle: value.description,
					media: value.asset,
				}
			},
		}
	}),
	defineField({
		title: 'Link',
		name: 'link',
		type: 'link',
	}),
]

export const Text = constructors.block({ name: 'Text', fields, icon: BsJournalRichtext })