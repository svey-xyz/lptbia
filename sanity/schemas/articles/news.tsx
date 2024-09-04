import { defineField } from "sanity";
import { ImNewspaper } from 'react-icons/im';
import { ARTICLE } from "@/sanity/schemas/articles/constructors/article";

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

const args = { type: 'news', fields, icon: ImNewspaper }
export const news = new ARTICLE(args)