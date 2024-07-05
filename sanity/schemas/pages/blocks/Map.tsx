import { defineType, defineField, defineArrayMember } from 'sanity';
import { } from 'react-icons';
import { mediaAssetSource } from 'sanity-plugin-media';

import constructors from '@/sanity/lib/constructors';
import { FaMapLocationDot } from 'react-icons/fa6';

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

export const Map = constructors.block({ name: 'Map', fields, icon: FaMapLocationDot })