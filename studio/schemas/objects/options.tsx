import { defineType, defineField, defineArrayMember } from "sanity";
import { mediaAssetSource } from "sanity-plugin-media";

import { BsInputCursorText } from "react-icons/bs";
import { CgReadme } from "react-icons/cg";
import React from "react";

export const options = defineField({
	title: 'Term',
	name: 'taxonomicTerm',
	type: 'object',
	// icon: FaTag,
	// options: { collapsible: true, collapsed: false },
	fieldsets: [
		{
			name: 'options',
			title: 'Options',
			options: { collapsible: true }
		},
		{
			name: 'media',
			title: 'Media',
			options: { collapsible: true }
		},
		{
			name: 'relational',
			title: 'Relational',
			options: { collapsible: true }
		}
	],
	fields: [

		/** OPTIONS */

		defineField({
			title: 'Options',
			name: 'note',
			type: 'note',
			description: <>These are standardized options for a variety of documents - if an option is not needed leave it blank.</>,
			options: {
				icon: CgReadme,
				tone: 'primary',
			}
		}),
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'Title for the document.',
			validation: (Rule) => Rule.required(),
			fieldset: 'options'
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description: 'Unique slug for the document.',
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
			fieldset: 'options'
		}),
		defineField({
			title: 'Published',
			name: 'published',
			type: 'boolean',
			initialValue: false,
			fieldset: 'options',
			description: 'Document will not be visible when not published.'
		}),
		defineField({
			title: 'Date',
			name: 'date',
			type: 'basicDate',
			fieldset: 'options',
			description: 'This can be the date of creation, the date of publication, etc.'
		}),
		defineField({
			title: 'Location',
			name: 'location',
			type: 'location',
			fieldset: 'options',
		}),

		/** RELATIONAL */

		defineField({
			title: 'Tags',
			name: 'tags',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{ type: 'taxonomicTerm' }]
				})
			],
			fieldset: 'relational'
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
			description: 'All relevant links for the document. The first link in the array is treated as the primary link.',
			fieldset: 'relational'

		}),
		defineField({
			title: 'Socials',
			name: 'socials',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'social',
				})
			],
			description: 'Any social sites related to the document.',
			fieldset: 'relational'
		}),

		/** MEDIA */

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
			fieldset: 'media'

		}),
		defineField({
			title: 'About',
			name: 'about',
			type: 'basicBlockContent',
			description: 'Brief description of the document.',
			fieldset: 'media'
		}),
	],
	preview: {
		select: {
			title: 'title',
			image: 'image'
		},
		prepare(value: any) {
			return {
				title: value.title,
				media: value.image ? value.image.asset : BsInputCursorText
			}
		}
	},
});