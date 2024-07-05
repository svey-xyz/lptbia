import { IconType } from "react-icons";
import { FieldGroupDefinition, FieldDefinition, DocumentDefinition } from 'sanity'

import { document } from './document'
import { taxonomy } from './taxonomy'

export type fields = FieldDefinition<"string" | "number" | "boolean" | "object" | "array" | "block" | "date" | "datetime" | "document" | "file" | "geopoint" | "image" | "reference" | "crossDatasetReference" | "slug" | "text" | "url" | "email" | "color", undefined>[]

export interface args {
	type: string,
	fields?: fields,
	icon?: IconType,
	groups?: FieldGroupDefinition[],
	taxonomies?: boolean,
}

export const taxonomyType = (type: string) => {
	return `${type}Taxonomy`
}

export class typeContainer {
	type: string
	taxonomies: boolean = true
	document: DocumentDefinition
	taxonomy?: DocumentDefinition

	constructor(args: args) {
		this.type = args.type
		this.taxonomies = args.taxonomies === false ? false : true
		this.document = document(args)
		this.taxonomy = this.taxonomies ? taxonomy(args) : undefined
	}
}