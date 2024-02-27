import {
	defineArrayMember,
	defineField,
	defineType,
} from "sanity";
import { mediaAssetSource } from "sanity-plugin-media";

export const settings = defineType({
	title: 'Settings',
	name: 'siteSettings',
	type: 'document',
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: Rule => Rule.required().error(`This site needs a fun name!`)
		}),
		defineField({
			title: 'Logo',
			name: 'logo',
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
		defineField({
			title: 'Blurb',
			name: 'blurb',
			type: 'string',
			description: 'Concise description of the site, used primarily for SEO and metadata.',
		}),
		defineField({
			title: 'Keywords',
			name: 'keywords',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'string',
				})
			],
		}),
		defineField({
			title: 'Contact Email',
			name: 'email',
			type: 'string',
			validation: (Rule) => Rule.email(),
		}),
		defineField({
			title: 'Phone Number',
			name: 'phoneNumber',
			type: 'string',
		}),
		defineField({
			title: 'Socials',
			name: 'socials',
			type: 'array',
			of: [
				defineArrayMember({ type: 'social', }),
			],
		}),
		defineField({
			title: 'About',
			name: 'about',
			type: 'extraBlockContent',
		}),
		defineField({
			title: 'Land Acknowledgement',
			name: 'landAcknowledgement',
			type: 'extraBlockContent',
		}),
		defineField({
			title: 'Location',
			name: 'location',
			type: 'geopoint',
		}),
		defineField({
			title: 'Directors',
			name: 'directors',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'object',
					name: 'director',
					fields: [
						defineField({
							title: 'Name',
							name: 'name',
							type: 'string',
						}),
						defineField({
							title: 'Position',
							name: 'position',
							type: 'string',
						}),
						defineField({
							name: 'business',
							title: 'Business',
							type: 'reference',
							to: [ { type:'business', } ],
							options: {
								disableNew: true,
							},
						}),
						defineField({
							name: 'contact',
							type: 'contact',
						}),
					]
				}),
			]
		}),
	],
	preview: {
		select: {
			title: 'title',
			blurb: 'blurb'
		},
		prepare(value: any) {
			return {
				title: `${value.title ? value.title : 'Site Settings'}`,
				description: value.blurb,
			}
		}
	}
})