import { defineType, defineField, defineArrayMember } from 'sanity';
import { } from 'react-icons';
import { mediaAssetSource } from 'sanity-plugin-media';

export const map = defineType({
	name: 'map',
	title: 'Map',
	type: 'document',
	fields: [
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