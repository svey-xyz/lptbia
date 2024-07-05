import { defineField } from 'sanity';
import { } from 'react-icons';
import constructors from '@/sanity/schemas/pages/constructors';
import { RiGalleryView } from 'react-icons/ri';

const fields = [
	defineField({
		title: 'Archive Type',
		name: 'archiveType',
		type: 'string',
		options: {
			list: [
				{ title: 'News', value: 'news' },
				{ title: 'Businesses', value: 'businesses' },
				{ title: 'Projects', value: 'projects' },
			],
			layout: 'radio',
		},
	}),
	defineField({
		title: 'Title',
		name: 'title',
		type: 'string',
	}),
	defineField({
		title: 'Description',
		name: 'description',
		type: 'array',
		of: [{type: 'block'}],
	}),
	// defineField({
	// 	title: 'Featured Taxonomies',
	// 	name: 'newsTaxonomies',
	// 	type: 'array',
	// 	description: 'If left empty all taxonomies will be available for sorting.',
	// 	of: [
	// 		{ type: 'reference',
	// 			to: [{ type: 'newsTaxonomy' }],
	// 		}
	// 	],
	// 	hidden: ({ parent, value }) => parent?.archiveType !== 'news',
	// }),
	// defineField({
	// 	title: 'Featured Taxonomies',
	// 	name: 'businessTaxonomies',
	// 	type: 'array',
	// 	description: 'If left empty all taxonomies will be available for sorting.',
	// 	of: [
	// 		{
	// 			type: 'reference',
	// 			to: [{ type: 'businessTaxonomy' }],
	// 		}
	// 	],
	// 	hidden: ({ parent, value }) => parent?.archiveType !== 'businesses',
	// }),
	// defineField({
	// 	title: 'Featured Taxonomies',
	// 	name: 'projectTaxonomies',
	// 	type: 'array',
	// 	description: 'If left empty all taxonomies will be available for sorting.',
	// 	of: [
	// 		{
	// 			type: 'reference',
	// 			to: [{ type: 'projectTaxonomy' }],
	// 		}
	// 	],
	// 	hidden: ({ parent, value }) => parent?.archiveType !== 'projects',
	// }),
]

export const Archive = constructors.block({ name: 'Archive', fields, icon: RiGalleryView })