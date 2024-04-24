import { defineType, defineField, defineArrayMember } from 'sanity';
import { } from 'react-icons';
import { mediaAssetSource } from 'sanity-plugin-media';

import constructors from '@/sanity/lib/constructors';

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
]

export const Map = constructors.block({ name: 'Map', fields })