import { defineType, defineField } from "sanity";
import { MdLocationPin } from "react-icons/md";

export const location = defineType({
	title: 'Location',
	name: 'location',
	icon: MdLocationPin,
	type: 'object',
	options: {
		collapsible: true, collapsed: true,
	},
	fields: [
		defineField({
			title: 'Address Number',
			name: 'addressNumber',
			type: 'number',
		}),
		defineField({
			title: 'Street Name',
			name: 'streetName',
			type: 'string',
		}),
		defineField({
			title: 'Unit',
			name: 'unit',
			type: 'string',
		}),
		defineField({
			title: 'Location',
			name: 'location',
			type: 'geopoint',
		}),
		defineField({
			title: 'Load in Street',
			name: 'loadStreet',
			type: 'string',
		}),
		defineField({
			title: 'Notes',
			name: 'notes',
			type: 'string',
		}),
		defineField({
			title: 'Precise Location',
			name: 'preciseLocation',
			type: 'boolean',
			description: 'When set to true the precise location will be displayed.'
		}),
		defineField({
			title: 'Zone',
			name: 'zone',
			type: 'string',
			options: {
				list: [
					{ title: 'Zone 6 - PURPLE', value: '6' },
					{ title: 'Zone 5 - ORANGE', value: '5' },
					{ title: 'Zone 4 - BLUE', value: '4' },
					{ title: 'Zone 3 - YELLOW', value: '3' },
					{ title: 'Zone 2 - GREEN', value: '2' },
					{ title: 'Zone 1 - PINK', value: '1' },
					{ title: 'Out of closure', value: '0' },
				],
			},
		}),
	],
	preview: {
		select: {
			address: 'address',
			notes: 'notes'
		},
		prepare(value: any) {
			return {
				title: value.address ? value.address : `Location`,
				subtitle: value.notes ? value.notes : '',
				media: MdLocationPin
			}
		}
	}
})