import { defineArrayMember, defineField, defineType } from "sanity";

import { BsFillBookmarkFill } from 'react-icons/bs'
import constructors from "@/studio/lib/constructors";

const fields = [
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

export const project = constructors.document({ name: 'project', taxonomicTerm: 'projectTaxonomy', fields, icon: BsFillBookmarkFill })
