import {
	defineArrayMember,
	defineField,
	defineType,
} from "sanity";

export const siteSettings = defineType({
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
				defineArrayMember({
					type: 'social',
				})
			],
		}),
		defineField({
			title: 'About',
			name: 'about',
			type: 'extraBlockContent',
			description: 'A full write-up about the OAM; displayed on the website.',
		}),
		defineField({
			title: 'Land Acknowledgement',
			name: 'landAcknowledgement',
			type: 'extraBlockContent',
		}),
		defineField({
			title: 'Land Acknowledgement Blurb',
			name: 'landAcknowledgementBlurb',
			type: 'string',
			description: 'A short blurb'
		}),
		defineField({
			title: 'Partners',
			name: 'partners',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{ type: 'sponsor' }]
				})
			]
		}),
		defineField({
			title: 'Location',
			name: 'location',
			type: 'geopoint',
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