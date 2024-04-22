// address as separate document
// spreadsheet
// filter
// archive businesses - status

import { defineType, defineField } from "sanity";

import { FaCircleInfo, FaStore, FaSignsPost, FaBandage } from "react-icons/fa6";
import { GiStreetLight } from "react-icons/gi";
import { CgReadme } from "react-icons/cg";
import { readableAddress } from "@/lib/readableAddress";

const healthOptions = [
	{ title: 'Good', value: 'good' },
	{ title: 'Needs Repairs', value: 'repairs' },
	{ title: 'On-Going Construction', value: 'construction' },

]

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
		{
			name: 'health',
			title: 'Health',
			icon: FaBandage,
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
			title: 'Notes',
			name: 'notes',
			type: 'text',
			group: 'about',
		}),

		/** STREET */
		
		defineField({
			title: 'Street Fields Information',
			name: 'streetNote',
			type: 'note',
			description: 'Information regarding the street/sidewalk in-front of the address.',
			options: {
				icon: CgReadme,
				tone: 'primary',
			},
			group: 'street',
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
			title: 'Bus Shelter',
			name: 'shelter',
			type: 'boolean',
			group: 'street',
		}),
		defineField({
			title: 'Waste Bins',
			name: 'bins',
			type: 'boolean',
			group: 'street',
		}),
		defineField({
			title: 'TTC Poles/Hydro',
			name: 'poles',
			type: 'string',
			options: {
				list: [
					{ title: 'Hydro', value: 'hydro' },
					{ title: 'TTC Poles', value: 'ttc' },
				]
			},
			group: 'street',
		}),
		defineField({
			title: 'Active Mural',
			name: 'murals',
			type: 'boolean',
			group: 'street',
		}),
		defineField({
			title: 'Mural Space Available',
			name: 'muralSpace',
			type: 'boolean',
			group: 'street',
		}),
		defineField({
			title: 'Frontage Meters',
			name: 'frontage',
			type: 'number',
			group: 'street',
		}),

		/** HEALTH */
		defineField({
			title: 'Property Health',
			name: 'propertyHealth',
			type: 'string',
			options: {
				list: healthOptions,
			},
			initialValue: 'good',
			group: 'health',
		}),
		defineField({
			title: 'Sidewalk Health',
			name: 'sidewalkHealth',
			type: 'string',
			options: {
				list: healthOptions,
			},
			initialValue: 'good',
			group: 'health',
		}),
		defineField({
			title: 'Street Health',
			name: 'streetHealth',
			type: 'string',
			options: {
				list: healthOptions,
			},
			initialValue: 'good',
			group: 'health',
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