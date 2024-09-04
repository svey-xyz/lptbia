import { camelCaseToWords } from "@lib/stringFunctions";
import { defineField, defineType } from "sanity";
import React from "react";
import { Icon } from '@iconify/react';
import { FaTag } from "react-icons/fa6";

export const taxonomyTitle = (article: string) => {
	return `${article}Taxonomy`
}

export const taxonomy = (article: string) => {
	const TaxonomyTitle = taxonomyTitle(article)

	return defineType({
		title: camelCaseToWords(TaxonomyTitle),
		name: TaxonomyTitle,
		type: 'document',
		icon: FaTag,
		fields: [
			defineField({
				name: 'prefLabel',
				title: 'Title',
				type: 'string',
				validation: (Rule) => Rule.required(),
			}),
			defineField({
				name: 'icon',
				title: 'Icon',
				type: 'icon',
			}),	
			defineField({
				name: 'definition',
				title: 'Description',
				type: 'string',
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
					media: value.icon ? <Icon icon={value.icon.name as string} /> : FaTag,
				}
			}
		},
	})
}