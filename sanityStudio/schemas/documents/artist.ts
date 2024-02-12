import { defineType, defineField, defineArrayMember, SlugRule } from "sanity";
import { mediaAssetSource } from "sanity-plugin-media";

import { BsPersonBadgeFill } from 'react-icons/bs';
import slugify from "slugify";
import { slugOptions } from "@/lib/globalSlugOptions";

export const artist = defineType({
	title: "Artist",
	name: "artist",
	type: 'document',
	icon: BsPersonBadgeFill,
	fields: [
		defineField({
			title: 'First Name',
			name: 'firstName',
			type: 'string',
			description: 'First name of the artist.',
			validation: (Rule) => [
				Rule.required().error("Artist needs a name!"),
			]
		}),
		defineField({
			title: 'Last Name',
			name: 'lastName',
			type: 'string',
			description: 'Last name of the artist.',
			validation: Rule => [
				Rule.required().error("Artist needs a name!"),
			]
		}),
		defineField({
			title: 'Alias',
			name: 'alias',
			type: 'string',
			description: 'Common alias used by the artist.',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description: 'Unique slug for the artist.',
			options: {
				source: (artist) => {
					const alias = artist.alias ? slugify(artist.alias as string, slugOptions) : null
					const name = slugify(`${artist.firstName}-${artist.lastName}`, slugOptions)
					const slug = alias ? alias : name
					return slug
				},
				maxLength: 96,
			},
			validation: (Rule:SlugRule) => Rule.required(),
		}),
		defineField({
			title: 'Bio',
			name: 'bio',
			type: 'basicBlockContent',
			description: 'A brief bio of the artist.',
		}),
		defineField({
			title: 'Image',
			name:'image',
			type: 'image',
			description: 'Image for the artist.',
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
			}
		}),
		defineField({
			title: 'Website',
			name: 'website',
			type: 'url',
			description: `Link to the artist's personal site.`
		}),
		defineField({
			title: 'Socials',
			name: 'socials',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'social',
				})
			]
		}),
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
		}),
	],
	preview: {
		select: {
			firstName: 'firstName',
			lastName: 'lastName',
			alias: 'alias',
			image: 'image'
		},
		prepare(value: any) {
			const name = value.firstName ? `${value.firstName} ${(value.lastName ? value.lastName : '')}` : ''
			return {
				title: value.alias ? `${value.alias} (${name})` : name,
				media: value.image ? value.image.asset : BsPersonBadgeFill
			}
		}
	},
});