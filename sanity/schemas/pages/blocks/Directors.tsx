import { defineType, defineField, defineArrayMember } from 'sanity';
import constructors from '@/sanity/schemas/pages/constructors';
import { TbChairDirector } from "react-icons/tb";

const fields = [
	defineField({
		title: 'Directors',
		name: 'directors',
		type: 'array',
		description: 'If no directors are selected, all directors will be displayed.',
		of: [
			{
				type: 'reference',
				to: { type: 'director' }
			}
		]
	}),
]

export const Directors = constructors.block({ name: 'Directors', fields, icon: TbChairDirector })