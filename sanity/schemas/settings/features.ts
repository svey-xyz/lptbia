import { AiFillStar } from "react-icons/ai";
import { BsCalendarEvent } from "react-icons/bs";
import { ImNewspaper } from "react-icons/im";
import {
	defineArrayMember,
	defineField,
	defineType,
} from "sanity";
import { mediaAssetSource } from "sanity-plugin-media";

export const features = defineType({
	title: 'Featured Content',
	name: 'featuredContent',
	type: 'document',
	icon: AiFillStar,
	fields: [
		defineField({
			title: 'Front Page Feature',
			name: 'frontpageFeature',
			type: 'object',
			fields: [
				defineField({
					type: 'string',
					name: 'title',
					title: 'Title',
				}),
				defineField({
					type: 'extraBlockContent',
					name: 'textContent',
					title: 'Text Content'
				}),
				defineField({
					title: 'Link',
					name: 'link',
					type: 'link',
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
			],
		}),
		defineField({
			title: 'Hero Images',
			name: 'heroImages',
			type: 'array',
			of: [
				defineArrayMember({
					title: 'Image',
					name: 'image',
					type: 'image',
					description: 'Hero image.',
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
			]
		}),
		defineField({
			title: 'Video',
			name: 'video',
			type: 'url',
			description: 'Video displayed on the landing page.',
		}),
		// defineField({
		// 	title: 'News',
		// 	name: 'news',
		// 	type: 'array',
		// 	of: [
		// 		defineArrayMember({
		// 			title: 'News',
		// 			name: 'news',
		// 			type: 'reference',
		// 			to: [
		// 				{ type: 'news' },
		// 			],
		// 			options: {
		// 				disableNew: true,
		// 			},
		// 		}),
		// 	],
		// }),
		// defineField({
		// 	name: 'businessTaxonomies',
		// 	title: 'Featured Business Types',
		// 	type: 'array',
		// 	of: [
		// 		defineArrayMember({
		// 			type: 'reference',
		// 			to: { type: 'businessTaxonomy' },
		// 			options: {
		// 				disableNew: true,
		// 			},
		// 		}),
		// 	],
		// }),
	],
	preview: {
		prepare(value: any) {
			return {
				title: `Featured Content`,
			}
		}
	}
})