import constructors from '@/sanity/lib/constructors';
import { defineType, defineField, defineArrayMember } from 'sanity';


const fields = [
	defineField({
		title: 'Taxonomies',
		name: 'taxonomies',
		description: 'List of featured Business taxonomies',
		type: 'array',
		of: [
			defineArrayMember({
				type: 'reference',
				to: { type: 'businessTaxonomy' },
				options: {
					disableNew: true,
				},
			}),
		],
	}),
]

export const featuredTaxonomies = constructors.block({ name: 'FeaturedTaxonomies', fields })