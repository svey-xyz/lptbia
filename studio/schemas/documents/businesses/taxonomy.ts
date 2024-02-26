import { defineField, defineType } from "sanity";

import { mediaAssetSource } from "sanity-plugin-media";
import { FaTag } from "react-icons/fa6";
import constructors from "@studio/lib/constructors"

const fields = [
		defineField({
			title: 'Icon',
			name: 'icon',
			type: 'image',
			description: 'Displayed in the frontend.',
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
	]

export const taxonomy = constructors.taxonomy({ name: 'businessTaxonomy', fields, icon: FaTag })