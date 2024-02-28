// address as separate document
// spreadsheet
// filter
// archive businesses - status

import { defineType, defineField, defineArrayMember } from "sanity";

import { FaCircleInfo, FaIdCard, FaStore, FaNoteSticky } from "react-icons/fa6";
import { mediaAssetSource } from "sanity-plugin-media";

export const business = defineType({
	name: 'business',
	title: 'Business',
	type: 'document',
	groups: [
		{
			name: 'about',
			title: 'About',
			default: true,
			icon: FaCircleInfo,
		},
		{
			name: 'contact',
			title: 'Contact',
			icon: FaIdCard,
		},
		{
			name: 'notes',
			title: 'Notes',
			icon: FaNoteSticky,
		},
	],
	fields: [

		/** ABOUT */

		defineField({
			title: 'Name',
			name: 'name',
			type: 'string',
			group: 'about',
		}),
		defineField({
			title: 'Published',
			name: 'published',
			type: 'boolean',
			initialValue: false,
			description: 'Published documents are visible on the website.',
			group: 'about',
		}),
		defineField({
			title: 'Logo',
			name: 'logo',
			type: 'image',
			group: 'about',
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
			title: 'Address',
			name: 'address',
			type: 'reference',
			to: [{type:'address'}],
			group: 'about',
		}),
		defineField({
			title: 'Taxonomies',
			name: 'taxonomies',
			type: 'array',
			of: [{ type:'businessTaxonomy'}],
			group: 'about',
		}),
		defineField({
			title: 'Description',
			name: 'description',
			type: 'basicBlockContent',
			group: 'about',
		}),

		/** CONTACT */

		defineField({
			title: 'Public Contact',
			name: 'publicContact',
			type: 'contact',
			group: 'contact',
			description: 'This information may be displayed publicly'
		}),
		defineField({
			title: 'Internal Contacts',
			name: 'internalContacts',
			type: 'array',
			of: [defineArrayMember({type:'contact'})],
			group: 'contact',
			description: 'This information is for internal use only'
		}),

		/** NOTES */

		defineField({
			title: 'LastSaturday',
			name: 'lastSaturday',
			type: 'boolean',
			group: 'notes',
		}),
		defineField({
			title: 'CafeTO',
			name: 'cafeTO',
			type: 'boolean',
			group: 'notes',
		}),
		defineField({
			title: 'Notes',
			name: 'notes',
			type: 'text',
			group: 'notes',
		}),
	],
	preview: {
		select: {
			name: 'name',
			logo: 'logo',
		},
		prepare(value: any) {
			const {name, logo} = value
			return {
				title: name ? name : 'Untitled Business',
				media: logo ? logo : FaStore,
			}
		},
	},
	icon: FaStore,
})