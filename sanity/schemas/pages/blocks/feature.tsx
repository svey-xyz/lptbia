import { defineType, defineField, defineArrayMember } from 'sanity';
import { } from 'react-icons';
import { mediaAssetSource } from 'sanity-plugin-media';

export const Feature = defineType({
	name: 'Feature',
	title: 'Feature',
	type: 'document',
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string'
		}),
		defineField({
			title: 'Text',
			name: 'text',
			type: 'block',
		}),
		defineField({
			title: 'Image',
			name: 'Image',
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