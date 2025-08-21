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
		title: 'Author(s)',
		name: 'authors',
		type: 'array',
		of: [
			{
				type: 'reference',
				to: [{ type: 'person' }],
			}
		],
	}),
	defineField({
		title: 'Date',
		name: 'date',
		type: 'basicDate'
	})
]

const orderings = [
	{ title: 'Date Desc', name: 'dateDesc', by: [{ field: 'date.endDate', direction: 'desc' as const }, { field: 'date.startDate', direction: 'desc' as const }] },
	{ title: 'Date Asc', name: 'dateAsc', by: [{ field: 'date.startDate', direction: 'asc' as const }, { field: 'date.startDate', direction: 'asc' as const }] },
]

const args = { type: 'news', fields, icon: ImNewspaper, customOrderings: orderings }
export const news = new ARTICLE(args)