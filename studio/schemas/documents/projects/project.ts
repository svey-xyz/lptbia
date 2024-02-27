import { defineArrayMember, defineField, defineType } from "sanity";
import { mediaAssetSource } from "sanity-plugin-media";

import { BsFillBookmarkFill } from 'react-icons/bs'

export const project = defineType({
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
		}),
		defineField({
			title: 'Published',
			name: 'published',
			type: 'boolean',
			initialValue: false,
		}),
		defineField({
			title: 'Date',
			name: 'date',
			type: 'basicDate',
			description: 'This can be the date of creation, the date of publication, etc.'
		}),
		defineField({
			title: 'Location',
			name: 'location',
			type: 'location',
		}),
		defineField({
			title: 'Image',
			name: 'image',
			type: 'image',
			description: 'Featured image.',
			options: {
				sources: [mediaAssetSource],
			},
			preview: {
				select: {
					asset: 'asset',
					title: 'asset.title',
					description: 'asset.description'

				},
				prepare(value: any) {
					return {
						title: value.title ? value.title : 'Untitled Image',
						subtitle: value.description,
						media: value.asset
					}
				}
			},
		}),
		defineField({
			title: 'Taxonomies',
			name: 'taxonomies',
			type: 'array',
			of: [defineArrayMember({type:'projectTaxonomy'})],
		}),
		defineField({
			title: 'Links',
			name: 'links',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'link',
				})
			],
		}),
		defineField({
			title: 'Write-up',
			name: 'writeup',
			type: 'basicBlockContent',
			description: 'Full write-up of the project.',
		}),
		defineField({
			title: 'Gallery',
			name: 'gallery',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'image'
				})
			]
		}),
		defineField({
			title: 'Credits',
			name: 'credits',
			type: 'basicBlockContent',
		}),
		defineField({
			title: 'Sponsor(s)',
			name: 'sponsors',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{ type: 'sponsor' }]
				})
			],
		}),
	],
	preview: {
		select: {
			title: 'title',
			image: 'image',
		},
		prepare(value:any) {
			const { title, image } = value
			return {
				title: title ? title : 'Untitled',
				media: image ? image : BsFillBookmarkFill
			}
		}
	},
	icon: BsFillBookmarkFill
})