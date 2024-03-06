import { camelCaseToWords } from "../../../lib/stringFunctions";
import { FieldDefinition, defineField, defineType } from "sanity";
import { IconType } from "react-icons";
import React from "react";
import { Icon } from '@iconify/react';

const skosPrimerURL: string = "https://www.w3.org/TR/2009/NOTE-skos-primer-20090818"
function skosSectionLink(sec: string, text: string) {
	const url = `${skosPrimerURL}/#${sec}`
	return <a href={url} target="_blank">{text}</a>
}

const taxonomicTermDescription =
	<span>Terms aim to apply to { skosSectionLink('', 'SKOS guidelines')} but are adapted to fit the requirements of this project.</span>

type fields = FieldDefinition<"string" | "number" | "boolean" | "object" | "array" | "block" | "date" | "datetime" | "document" | "file" | "geopoint" | "image" | "reference" | "crossDatasetReference" | "slug" | "text" | "url" | "email" | "color", undefined>[]

export function taxonomy(args: { name: string, fields?: fields, icon?: IconType | undefined }) {
	const { name, icon, fields } = args
	const generatedFields = fields?.map(field => {
		field.fieldset = 'unique'
		return field
	})
	const fieldsArray = generatedFields ? generatedFields : []


	return defineType({
		title: camelCaseToWords(name),
		name: name,
		type: 'document',
		icon: icon,
		description: taxonomicTermDescription,
		fieldsets: [
			{
				name: 'unique',
				title: 'Unique',
				description: 'Fields unique to this group of taxonomies.',
			},
			{
				name: 'options',
				title: 'Options',
			},
			{
				name: 'relational',
				title: 'Relational',
				description: 'These fields could have future use',
			},
		],
		fields: [
			defineField({
				name: 'descriptiveNote',
				title: 'Note',
				type: 'note',
				description: taxonomicTermDescription,
			}),
			
			...fieldsArray,

			/** OPTIONS */

			defineField({
				name: 'termVisibility',
				title: 'Term Visibility',
				type: 'boolean',
				description: 'When set to true the term will be visible to users, all other terms are visible only in the database.',
				fieldset: 'options',
				initialValue: true,

			}),
			defineField({
				name: 'prefLabel',
				title: 'Title',
				type: 'string',
				description: skosSectionLink('seclabel', 'Preferred Lexical Label.'),
				fieldset: 'options',
				validation: (Rule) => Rule.required(),
			}),
			defineField({
				name: 'definition',
				title: 'Description',
				type: 'string',
				fieldset: 'options',
				description: skosSectionLink('secdocumentation', 'The description supplies a complete explanation of the term.')
			}),

			/** OPTIONS */

			defineField({
				name: 'related',
				title: 'Related Terms',
				type: 'reference',
				to: [{ type: name }],
				fieldset: 'relational',
				description: skosSectionLink('secassociative', 'Related terms that are not broader or narrower.'),
			}),
			defineField({
				name: 'broader',
				title: 'Broader Terms',
				type: 'reference',
				to: [{ type: name }],
				fieldset: 'relational',
				description: skosSectionLink('sechierarchy', 'More general terms.'),
			}),
			defineField({
				name: 'narrower',
				title: 'Narrower Terms',
				type: 'reference',
				to: [{ type: name }],
				fieldset: 'relational',
				description: skosSectionLink('sechierarchy', 'More specific terms.'),
			}),
		],
		preview: {
			select: {
				prefLabel: 'prefLabel',
				description: 'definition',
				icon: 'icon',
			},
			prepare(value: any) {
				console.log(value.icon)
				return {
					title: value.prefLabel,
					description: value.description,
					media: value.icon ? <Icon icon={value.icon.name as string} /> : icon,
				}
			}
		},
	})
}