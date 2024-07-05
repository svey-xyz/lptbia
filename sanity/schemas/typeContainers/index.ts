import { projects } from './projects';
import { news } from './news';
import { businesses } from './businesses'

export const TypeContainers = [
	projects, news, businesses
]

export const Types = (() => {
	let types: Array<{ type: 'document', name: string }> = []

	TypeContainers.forEach((typeContainer) => {
		types.push(typeContainer.document)
		if (typeContainer.taxonomy) types.push(typeContainer.taxonomy)
	})
	return types
})()

export default Types;