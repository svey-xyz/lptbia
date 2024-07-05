import { camelCaseToWords } from "@lib/stringFunctions";
import { defineField, defineType } from "sanity";
import React from "react";
import { Icon } from '@iconify/react';
import { FaTag } from "react-icons/fa6";
import { args } from './container'

import { taxonomyType } from "@/sanity/schemas/typeContainers/constructors/container";


const skosPrimerURL: string = "https://www.w3.org/TR/2009/NOTE-skos-primer-20090818"
function skosSectionLink(sec: string, text: string) {
	const url = `${skosPrimerURL}/#${sec}`
	return <a href={url} target="_blank">{text}</a>
}

const taxonomicTermDescription =
	<span>Terms aim to apply to { skosSectionLink('', 'SKOS guidelines')} but are adapted to fit the requirements of this project.</span>



export function taxonomy(args: args) {
	const { type, icon, fields } = args
	const TaxonomyType = taxonomyType(type)

	// const generatedFields = fields?.map(field => {
	// 	field.fieldset = 'unique'
	// 	return field
	// })
	// const fieldsArray = generatedFields ? generatedFields : []


	return defineType({
		title: camelCaseToWords(TaxonomyType),
		name: TaxonomyType,
		type: 'document',
		icon: icon || FaTag,
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
			
			defineField({
				name: 'icon',
				title: 'Icon',
				type: 'icon',
			}),

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
				to: [{ type: TaxonomyType }],
				fieldset: 'relational',
				description: skosSectionLink('secassociative', 'Related terms that are not broader or narrower.'),
			}),
			defineField({
				name: 'broader',
				title: 'Broader Terms',
				type: 'reference',
				to: [{ type: TaxonomyType }],
				fieldset: 'relational',
				description: skosSectionLink('sechierarchy', 'More general terms.'),
			}),
			defineField({
				name: 'narrower',
				title: 'Narrower Terms',
				type: 'reference',
				to: [{ type: TaxonomyType }],
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
				return {
					title: value.prefLabel,
					description: value.description,
					media: value.icon ? <Icon icon={value.icon.name as string} /> : icon,
				}
			}
		},
	})
}