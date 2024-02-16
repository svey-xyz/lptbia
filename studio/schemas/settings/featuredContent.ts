import { AiFillStar } from "react-icons/ai";
import { BsCalendarEvent } from "react-icons/bs";
import { ImNewspaper } from "react-icons/im";
import {
	defineArrayMember,
	defineField,
	defineType,
} from "sanity";
import { mediaAssetSource } from "sanity-plugin-media";

export const featuredContent = defineType({
	title: 'Featured Content',
	name: 'featuredContent',
	type: 'document',
	icon: AiFillStar,
	fields: [
		defineField({
			title: 'Front Page Text',
			name: 'frontpageText',
			type: 'object',
			fields: [
				defineField({
					type: 'basicBlockContent',
					name: 'textContent',
					title: 'Text Content'
				}),
				defineField({
					title: 'Link',
					name: 'link',
					type: 'url'
				})
			]
		}),
		defineField({
			title: 'Front Page Content',
			name: 'frontpageContent',
			type: 'array',
			validation: (Rule) => Rule.max(2),
			of: [
				defineArrayMember({
					title: 'Featured Item',
					name: 'featuredItem',
					type: 'object',
					fields: [
						defineField({
							title: 'Featured Content',
							name: 'featuredContent',
							type: 'reference',
							to: [
								{ type: 'project' },
								{ type: 'news' },
							],
							options: {
								disableNew: true,
							},
						}),
						defineField({
							title: 'Image',
							name: 'image',
							type: 'image',
							description: 'Featured image.',
							options: {
								sources: [mediaAssetSource]
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
					preview: {
						select: {
							title: 'featuredContent.basicDocumentOptions.title',
							image: 'featuredContent.basicDocumentOptions.image',
							type: 'featuredContent._type'
						},
						prepare(value: any) {
							const docType = value.type.charAt(0).toUpperCase() + value.type.slice(1);
							return {
								title: `${docType}: ${value.title}`,
								media: value.image ? value.image.asset : value.image ? value.image : AiFillStar
							}
						}
					}
				}),
			]
		}),
		defineField({
			title: 'News',
			name: 'news',
			type: 'array',
			validation: (Rule) => Rule.max(2),
			of: [
				defineArrayMember({
					title: 'Featured Item',
					name: 'featuredItem',
					type: 'object',
					fields: [
						defineField({
							title: 'Featured Content',
							name: 'featuredContent',
							type: 'reference',
							to: [
								{ type: 'news' },
							],
							options: {
								disableNew: true,
							},
						}),
						defineField({
							title: 'Image',
							name: 'image',
							type: 'image',
							description: 'Featured image.',
							options: {
								sources: [mediaAssetSource]
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
					preview: {
						select: {
							title: 'featuredContent.basicDocumentOptions.title',
							image: 'featuredContent.basicDocumentOptions.image',
						},
						prepare(value: any) {
							return {
								title: value.title,
								media: value.image ? value.image.asset : value.image ? value.image : ImNewspaper
							}
						}
					}
				}),
			]
		}),
	],
	preview: {
		prepare(value: any) {
			return {
				title: `Featured Content`,
			}
		}
	}
})