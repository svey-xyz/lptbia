import { defineType, defineField, defineArrayMember } from 'sanity';
import { } from 'react-icons';
import { mediaAssetSource } from 'sanity-plugin-media';

import constructors from '@/sanity/schemas/pages/constructors';
import { FaMapLocationDot } from 'react-icons/fa6';
import ARTICLES from '@/sanity/schemas/articles';
import { taxonomyTitle } from '@/sanity/schemas/articles/constructors/taxonomy';

const fields: any = [
	defineField({
		title: 'Api Key',
		name: 'apiKey',
		type: 'string',
		validation: Rule => Rule.required(),
	}),
	defineField({
		title: 'Centre',
		name: 'centre',
		type: 'geopoint',
		validation: Rule => Rule.required(),
	}),
	defineField({
		title: 'Featured Busiensses',
		name: `featured_Businesses`,
		type: 'array',
		description: 'Only businesses with the selected taxonomies will appear. If no taxonomies are selected then all businesses will be included.',
		of: [{
			type: 'reference',
			to: [{ type: 'businessTaxonomy' }],
			options: {
				disableNew: true
			}
		}]
	})
]

export const Map = constructors.block({ name: 'Map', fields, icon: FaMapLocationDot })