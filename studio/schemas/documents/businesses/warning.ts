import { defineField, defineType } from "sanity";

import { IoWarning } from "react-icons/io5";

export const warning = defineType({
	name: 'businessWarning',
	type: 'document',
	fields: [
		defineField({
			title: 'Term',
			name: 'term',
			type: 'taxonomy',
		}),
	],
	icon: IoWarning
})