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
			title: 'Logo',
			name: 'logo',
			type: 'image',
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
			title: 'Location',
			name: 'location',
			type: 'location',
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
			title: 'Website',
			name: 'website',
			type: 'url',
			group: 'contact',
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
			group: 'contact',
		}),
		defineField({
			title: 'Contact Name',
			name: 'contactName',
			type: 'string',
			group: 'contact',
		}),
		defineField({
			title: 'Email',
			name: 'email',
			type: 'string',
			validation: Rule => Rule.email(),
			group: 'contact',
		}),
		defineField({
			title: 'Phone',
			name: 'phone',
			type: 'string',
			validation: Rule => Rule.regex(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, {name:'phone number'}),
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
})