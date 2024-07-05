import { defineField, defineType } from "sanity";
import { ImNewspaper } from 'react-icons/im';
import { typeContainer } from "@/sanity/schemas/typeContainers/constructors/container";

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
export const news = new typeContainer(args)