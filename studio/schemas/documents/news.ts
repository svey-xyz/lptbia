import { defineField, defineType } from "sanity";

import { ImNewspaper } from 'react-icons/im';

export const news = defineType({
	name:'news',
	type:'document',
	fields:[
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