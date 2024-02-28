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
			title: 'Member Name',
			name: 'memberName',
			type: 'string',
			group: 'about',
		}),
		defineField({
			title: 'Vendor Name',
			name: 'vendorName',
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
			title: 'Activation Type',
			name: 'activationType',
			type: 'array',
			of: [{ type:'businessTaxonomy'}],
			group: 'about',
		}),
		defineField({
			title: 'Food spot',
			name: 'foodSpot',
			type: 'array',
			description: 'Leave both un-selected if business is not a food spot.',
			of: [{ type: 'string' }],
			options: {
				list: [
					{ title: 'To Go', value: 'toGo' },
					{ title: 'Dine In', value: 'dineIn' },
				],
				
				layout: 'grid',
			},
			group: 'about',
		}),

		/** CONTACT */

		defineField({
			title: 'Contact Name',
			name: 'contactName',
			type: 'string',
			group: 'contact',
		}),
		defineField({
			title: 'Contact',
			name: 'contact',
			type: 'contact',
			group: 'contact',
		}),

		/** NOTES */

		defineField({
			title: 'Outreach Notes',
			name: 'outreachNotes',
			type: 'text',
			group: 'notes',
		}),
		defineField({
			title: 'CafeTO Notes',
			name: 'cafeTONotes',
			type: 'text',
			group: 'notes',
		}),
		defineField({
			title: 'CafeTO',
			name: 'cafeTO',
			type: 'string',
			options: {
				list: [
					{ title: 'Yes', value: 'yes' },
					{ title: 'No', value: 'no' },
					{ title: 'Blocked', value: 'blocked' },
					{ title: 'Partially Blocked', value: 'partially' },
				],
			},
			group: 'notes',
		}),
		defineField({
			title: 'Warnings',
			name: 'warnings',
			type: 'array',
			of: [{ type: 'businessWarning' }],
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
			memberName: 'memberName',
			vendorName: 'vendorName',
			logo: 'logo',
		},
		prepare(value: any) {
			const {memberName, vendorName, logo} = value
			return {
				title: memberName ? memberName : vendorName ? vendorName : 'Untitled Business',
				media: logo ? logo : FaStore,
			}
		},
	},
	icon: FaStore,
})