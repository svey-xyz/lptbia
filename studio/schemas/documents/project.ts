import { defineType, defineField, defineArrayMember } from "sanity";

import { BsFillBookmarkFill } from 'react-icons/bs'

export const project = defineType({
	name: 'project',
	title: 'Project',
	type: 'document',
	fields:[
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