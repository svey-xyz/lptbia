import { defineArrayMember, defineField, defineType } from "sanity";

import { BsFillBookmarkFill } from 'react-icons/bs'
import { typeContainer } from "@/sanity/schemas/typeContainers/constructors/container";
import { mediaAssetSource } from "sanity-plugin-media";
import { DocumentTypeNames } from "@/sanity/schemas/typeContainers";

const fields = [
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
	defineField({
		title: 'Date',
		name: 'date',
		type: 'basicDate',
		group: 'about',
	}),
	defineField({
		title: 'Write-up',
		name: 'writeup',
		type: 'basicBlockContent',
		description: 'Full write-up of the project.',
	}),
	defineField({
		title: 'Gallery',
		name: 'gallery',
		type: 'array',
		of: [
			defineArrayMember({
				type: 'image'
			})
		]
	}),
	defineField({
		title: 'Credits',
		name: 'credits',
		type: 'basicBlockContent',
	}),
	defineField({
		title: 'Sponsor(s)',
		name: 'sponsors',
		type: 'array',
		of: [
			defineArrayMember({
				type: 'reference',
				to: [{ type: 'sponsor' }]
			})
		],
	}),
]

const type: DocumentTypeNames = 'project'
const args = { type, fields, icon: BsFillBookmarkFill }
export const projects = new typeContainer(args)

