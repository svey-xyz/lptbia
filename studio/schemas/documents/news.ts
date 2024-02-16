import { defineField, defineType } from "sanity";

import { ImNewspaper } from 'react-icons/im';
import { options } from '@studio/schemas/objects/options'

export const news = defineType({
	name:'news',
	type:'document',

	fields:[
		options,
		defineField({
			title: 'Content',
			name: 'content',
			type: 'extraBlockContent',
			description: 'The main content of the news.',
		}),
		defineField({
			title: 'Author',
			name: 'author',
			type: 'string',
			description: 'Author of the article.'
		}),
	],
	icon: ImNewspaper
})