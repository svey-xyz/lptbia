import { defineField, defineType } from "sanity";
import { ImNewspaper } from 'react-icons/im';
import constructors from "@/studio/lib/constructors";

const fields = [
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
]

export const news = constructors.document({ name: 'news', taxonomicTerm: 'newsTaxonomy', fields, icon: ImNewspaper })
