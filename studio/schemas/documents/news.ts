import { defineField } from "sanity";

import { ImNewspaper } from 'react-icons/im';
import { basicDocumentConstructor } from "@/sanityStudio/lib/basicDocumentConstructor";

export const news = basicDocumentConstructor({
	name:'news',
	contentFields:[
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