import { basicDocumentConstructor } from "@/sanityStudio/lib/basicDocumentConstructor";
import { defineType, defineField, defineArrayMember } from "sanity";
import { HiBuildingStorefront } from 'react-icons/hi2';

export const host = defineType({
	title: "Host",
	name: "host",
	type: 'document',
	icon: HiBuildingStorefront,
	fields: [
		defineField({
			title: 'Title',
			name: 'title',
			type: 'string',
			description: 'Sponsor title.',
			validation: Rule => [
				Rule.required().error("Sponsor needs a title!"),
			]
		}),
		defineField({
			title: 'Location',
			name: 'location',
			type: 'location',
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
			title: 'About',
			name: 'about',
			type: 'basicBlockContent',
		}),
	],
	preview: {
		select: {
			title: 'title',
			image: 'image'
		},
		prepare(value: any) {
			return {
				title: value.title,
				media: value.image ? value.image : HiBuildingStorefront
			}
		}
	},
});