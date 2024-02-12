import { defineType, defineField, defineArrayMember } from "sanity";
import { mediaAssetSource } from "sanity-plugin-media";

import { HiOutlineUserGroup } from "react-icons/hi2";
import slugify from "slugify";
import { slugOptions } from "@/lib/globalSlugOptions";

export const artistGroup = defineType({
	title: "Artist Group",
	name: "artistGroup",
	type: 'document',
	icon: HiOutlineUserGroup,
	fields: [
		defineField({
			title: 'Group Name',
			name: 'name',
			type: 'string',
			validation: (Rule) => [
				Rule.required().error("Artist group needs a name!"),
			]
		}),
		defineField({
			title: 'Group Alias',
			name: 'alias',
			type: 'string',
			description: 'Common alias used by the group.',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			description: 'Unique slug for the group.',
			options: {
				source: (group) => {
					const alias = group.alias ? slugify(group.alias as string, slugOptions) : null
					const name = group.name ? slugify(group.name as string) : null
					const slug = alias ? alias : name ? name : ''
					return slug
				},
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			title: 'Artists',
			name: 'artists',
			type: 'array',
			of : [
				defineArrayMember({
					type: 'reference',
					to: [{type:'artist'}],
				}),
			],
		}),
		defineField({
			title: 'Group Bio',
			name: 'bio',
			type: 'basicBlockContent',
			description: 'A brief bio of the group.',
		}),
		defineField({
			title: 'Website',
			name: 'website',
			type: 'url',
			description: `Link to the group's site.`
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
		defineField({
			title: 'Image',
			name: 'image',
			type: 'image',
			description: 'Image for the group.',
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
	],
	preview: {
		select: {
			name: 'name',
			alias: 'alias',
			image: 'image'
		},
		prepare(value: any) {
			const name = value.name ? value.name : undefined;
			return {
				title: value.alias ? value.name ? `${value.alias} (${name})` : value.alias : value.name ? value.name : 'Unnamed Group',
				media: value.image ? value.image.asset : HiOutlineUserGroup
			}
		}
	},
});