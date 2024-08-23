import { defineField } from 'sanity';
import { } from 'react-icons';
import constructors from '@/sanity/schemas/pages/constructors';
import { RiGalleryView } from 'react-icons/ri';
import { DocumentContainers } from '@/sanity/schemas/typeContainers'
import { camelCaseToWords } from '@/lib/stringFunctions';

const archiveTypes = DocumentContainers.flatMap((container) => {
	if (container.child) return []
	return { title: camelCaseToWords(container.type), value: container.type }
})


const fields = [
	defineField({
		title: 'Archive Type',
		name: 'archiveType',
		type: 'string',
		options: {
			list: archiveTypes,
			layout: 'radio',
		},
	}),
	defineField({
		title: 'Title',
		name: 'title',
		type: 'string',
	}),
	defineField({
		title: 'Description',
		name: 'description',
		type: 'array',
		of: [{type: 'block'}],
	}),
]

export const Archive = constructors.block({ name: 'Archive', fields, icon: RiGalleryView })