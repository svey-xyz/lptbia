import { defineField } from 'sanity';
import constructors from '@/sanity/schemas/pages/constructors';
import { BiSolidDockTop } from "react-icons/bi";
import { mediaAssetSource } from 'sanity-plugin-media';

const fields = [
	defineField({
		title: 'Image',
		name: 'image',
		type: 'image',
		options: {
			sources: [mediaAssetSource],
		},
		preview: {
			select: {
				asset: 'asset',
				title: 'asset.title',
				description: 'asset.description'

			},
			prepare(value: any) {
				return {
					title: value.title ? value.title : 'Untitled Image',
					subtitle: value.description,
					media: value.asset
				}
			}
		},
	}),
]

export const Hero = constructors.block({ name: 'Hero', fields, icon: BiSolidDockTop })