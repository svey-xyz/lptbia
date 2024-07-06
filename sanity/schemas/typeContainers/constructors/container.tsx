import { IconType } from "react-icons";
import { FieldGroupDefinition, FieldDefinition, DocumentDefinition, PreviewConfig } from 'sanity'

import { document } from './document'
import { taxonomy } from './taxonomy'

export type fields = FieldDefinition<"string" | "number" | "boolean" | "object" | "array" | "block" | "date" | "datetime" | "document" | "file" | "geopoint" | "image" | "reference" | "crossDatasetReference" | "slug" | "text" | "url" | "email" | "color", undefined>[]

export interface args {
	type: string,
	taxonomies?: boolean,
	child?: boolean,
	fields?: fields,
	icon?: IconType,
	groups?: FieldGroupDefinition[],
	childTypes?: Array<typeContainer>,
	customPreview?: PreviewConfig,
}

export const taxonomyType = (type: string) => {
	return `${type}Taxonomy`
}

export class typeContainer {
	type: string
	taxonomies: boolean = true
	child: boolean = false
	document: DocumentDefinition
	taxonomy?: DocumentDefinition
	childTypes?: typeContainer[]
	customPreview?: PreviewConfig

	constructor(args: args) {
		this.type = args.type
		this.taxonomies = args.taxonomies === false ? false : true
		this.child = args.child ? true : false
		this.document = document(args)
		this.taxonomy = this.taxonomies ? taxonomy(args) : undefined
		this.childTypes = args.childTypes
		this.customPreview = args.customPreview
	}
}