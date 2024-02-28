// address as separate document
// spreadsheet
// filter
// archive businesses - status

import { defineType, defineField } from "sanity";

import { FaCircleInfo, FaStore, FaSignsPost } from "react-icons/fa6";
import { GiStreetLight } from "react-icons/gi";
import { CgReadme } from "react-icons/cg";
import { readableAddress } from "@/lib/readableAddress";

export const address = defineType({
	name: 'address',
	title: 'Address',
	type: 'document',
	groups: [
		{
			name: 'about',
			title: 'About',
			default: true,
			icon: FaCircleInfo,
		},
		{
			name: 'street',
			title: 'Street',
			icon: GiStreetLight,
		},
	],
	fields: [
		defineField({
			title: 'Location',
			name: 'location',
			type: 'location',
			group: 'about',
		}),
		defineField({
			title: 'Type',
			name: 'type',
			type: 'string',
			options: {
				list: [
					{ title: 'Business', value: 'business' },
					{ title: 'Residence', value: 'residence' },
				],
			},
			group: 'about',
		}),
		defineField({
			title: 'Status',
			name: 'status',
			type: 'string',
			options: {
				list: [
					{ title: 'Active', value: 'active' },
					{ title: 'Vacant', value: 'vacant' },
				],
			},
			group: 'about',
		}),
		defineField({
			title: 'Listing',
			name: 'listing',
			type: 'string',
			options: {
				list: [
					{ title: 'For Sale', value: 'sale' },
					{ title: 'For Lease', value: 'lease' },
				],
			},
			initialValue: 'good',
			group: 'about',
		}),
		defineField({
			title: 'Health',
			name: 'health',
			type: 'string',
			options: {
				list: [
					{ title: 'Needs Repairs', value: 'repairs' },
					{ title: 'Good', value: 'good' },
				],
			},
			initialValue: 'good',
			group: 'about',
		}),
		defineField({
			title: 'Notes',
			name: 'addressNotes',
			type: 'text',
			group: 'about',
		}),
		
		defineField({
			title: 'Street Fields Information',
			name: 'streetNote',
			type: 'note',
			description: 'Information regarding the street/sidewalk in-front of the address.',
			options: {
				icon: CgReadme,
				tone: 'primary',
			},
		}),
		defineField({
			title: 'Planters',
			name: 'planters',
			type: 'boolean',
			group: 'street',
		}),
		defineField({
			title: 'Banners',
			name: 'banners',
			type: 'boolean',
			group: 'street',
		}),
		defineField({
			title: 'TTC',
			name: 'ttc',
			type: 'boolean',
			group: 'street',
		}),
		defineField({
			title: 'Construction',
			name: 'construction',
			type: 'boolean',
			group: 'street',
		}),
		defineField({
			title: 'Notes',
			name: 'streetNotes',
			type: 'text',
			group: 'street',
		}),
		
	],
	preview: {
		select: {
			location: 'location',
		},
		prepare(value: any) {
			const { location } = value
			const address = readableAddress({ _type: 'loc', number: location.number, unit: location.unit, street: location.street })
			return {
				title: address ? address : 'Untitled Location',
				media: FaSignsPost,
			}
		},
	},
	icon: FaSignsPost
})