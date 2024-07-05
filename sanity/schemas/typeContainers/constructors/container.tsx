import { fields } from "@/sanity/lib/types";
import { IconType } from "react-icons";
import { document } from './document'
import { taxonomy } from './taxonomy'

export const taxonomyType = (type: string) => {
	return `${type}Taxonomy`
}

export const container = (args: { type: string, fields?: fields, icon?: IconType }) => {
	const { type, icon, fields } = args

	const typeContainer = {
		type: type,
		document: document({ name: type, fields, icon }),
		taxonomy: taxonomy({ documentType: type }),
	}

	return typeContainer
}
