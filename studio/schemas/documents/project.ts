import { defineType, defineField, defineArrayMember } from "sanity";
import { basicDocumentConstructor } from "@/sanityStudio/lib/basicDocumentConstructor";

import { BsFillBookmarkFill } from 'react-icons/bs'

export const project = basicDocumentConstructor({
	name: 'project',
	contentFields:[
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
		defineField({
			title: 'Host(s)',
			name: 'hosts',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{ type: 'host' }]
				})
			],
		}),
		defineField({
			title: 'Artist(s)',
			name: 'artists',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'reference',
					to: [{ type: 'artist' }, { type: 'artistGroup' }]
				})
			],
		}),
		defineField({
			title: 'Write-up',
			name: 'writeup',
			type: 'basicBlockContent',
			description: 'Full write-up of the project.',
		}),
		defineField({
			title: 'Credits',
			name: 'credits',
			type: 'basicBlockContent',
			description: 'Any additional credits beyond the artists.',
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
			title: 'AR Project',
			name: 'arProject',
			type: 'url',
			description: 'A link to the 8th wall project.'
		}),
		defineField({
			title: 'Additional Media',
			name: 'media',
			type: 'array',
			of: [
				defineArrayMember({
					title: 'Media File',
					name: 'mediaFile',
					type: 'file',
					fields: [
						defineField({
							title: 'File Type',
							name: 'fileType',
							type: 'string',
							options: {
								list: [
									{title:'WebGL', value:'webgl'},
									{ title: 'Audio', value: 'audio' },

								],
							},
						})
					],
				})
			]
		}),
	],
	icon: BsFillBookmarkFill,
})