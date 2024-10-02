import { defineField } from 'sanity';
import constructors from '@/sanity/schemas/pages/constructors';
import { mediaAssetSource } from 'sanity-plugin-media';
import { FaImage } from 'react-icons/fa6';

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
	defineField({
		title: 'Accented',
		name: 'accented',
		type: 'boolean',
		description: 'Applies accent styling to the image.'
	})
]

export const Image = constructors.block({ name: 'Image', fields, icon: FaImage })