import { defineType, defineField } from "sanity";
import { MdLocationPin } from "react-icons/md";

export const location = defineType({
	title: 'Location',
	name: 'location',
	icon: MdLocationPin,
	type: 'object',
	fields: [
		defineField({
			title: 'Location',
			name: 'location',
			type: 'geopoint',
		}),
		defineField({
			title: 'Address',
			name: 'address',
			type: 'string',
			description: 'Street number and name. Do not enter postal code or province.',
		}),
		defineField({
			title: 'Notes',
			name: 'notes',
			type: 'string',
			description: 'Notes about the location; may include information such as the placement.',
		}),
		defineField({
			title: 'Precise Location',
			name: 'preciseLocation',
			type: 'boolean',
			description: 'When set to true the precise location will be displayed.'
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