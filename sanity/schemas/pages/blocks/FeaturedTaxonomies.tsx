import constructors from '@/sanity/schemas/pages/constructors';
import { FaTags } from 'react-icons/fa6';
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

export const FeaturedTaxonomies = constructors.block({ name: 'FeaturedTaxonomies', fields, icon: FaTags })