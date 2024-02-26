import { defineField, defineType } from "sanity";

import { mediaAssetSource } from "sanity-plugin-media";
import { FaTag } from "react-icons/fa6";

export const taxonomy = defineType({
	name: 'businessTaxonomy',
	type: 'document',
	fields: [
		defineField({
			title: 'Icon',
			name: 'icon',
			type: 'image',
			options: {
				sources: [mediaAssetSource],
				accept: '.svg',
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
			title: 'Term',
			name: 'term',
			type: 'taxonomy',
		}),
	],
	icon: FaTag
})