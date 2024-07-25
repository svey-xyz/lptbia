import { defineField, defineType } from "sanity";
import { ImNewspaper } from 'react-icons/im';
import { typeContainer } from "@/sanity/schemas/typeContainers/constructors/container";
import { mediaAssetSource } from "sanity-plugin-media";

const fields = [
	defineField({
		title: 'Content',
		name: 'content',
		type: 'extraBlockContent',
		description: 'The main content of the news.',
	}),
	defineField({
		title: 'Author',
		name: 'author',
		type: 'string',
		description: 'Author of the article.'
	}),
	defineField({
		title: 'Image',
		name: 'image',
		type: 'image',
		group: 'about',
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

const args = { type: 'news', fields, icon: ImNewspaper }
export const news = new typeContainer(args)