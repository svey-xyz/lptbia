import { defineType, defineField } from "sanity";
import { BiLink } from 'react-icons/bi';

const URLExpression = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)
const slugExpression = new RegExp(/^[/]+[a-z0-9]+(?:(?:-|_)+[a-z0-9]+)*$/)

export const link = defineType({
	title: 'Link',
	name: 'link',
	icon: BiLink,
	type: 'object',
	fields: [
		defineField({
			title: 'Link Text',
			name: 'text',
			type: 'string',
			validation: Rule => Rule.required(),
		}),
		defineField({
			title: 'Type',
			name: 'type',
			type: 'string',
			options: {
				list: [
					{ title: 'Internal', value: 'internal' },
					{ title: 'External', value: 'external' },
				],
			},
		}),
		defineField({
			title: 'Link',
			name: 'link',
			type: 'string',
			validation: Rule => Rule.custom((field, context) => {
				if (!field) return 'This field must not be empty'

				const type: string | undefined = (context.parent as any).type
				switch (type) {
					case('internal'):
						return slugExpression.test(field) ? true : `This doesn't look like a slug.`
					case('external'):
						return URLExpression.test(field) ? true : `This doesn't look like a URL.`
					default:
						return 'Select a link type'
				}
			}),
		}),

	],
	preview: {
		select: {
			title: 'text',
			link: 'link'
		},
		prepare(value: any) {
			return {
				title: value.title ? value.title  : `Link text not set.`,
				subtitle: value.link,
				media: BiLink
			}
		}
	}
})