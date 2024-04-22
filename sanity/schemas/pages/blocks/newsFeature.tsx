import { defineType, defineField, defineArrayMember } from 'sanity';
import { } from 'react-icons';
import { mediaAssetSource } from 'sanity-plugin-media';

export const newsFeature = defineType({
	name: 'newsFeature',
	title: 'NewsFeature',
	type: 'document',
	fields: [
		defineField({
			title: 'Title',
			name: 'Title',
			type: 'string'
		}),
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