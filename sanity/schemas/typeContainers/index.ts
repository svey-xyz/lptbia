import { projects } from './projects';
import { news } from './news';

export const TypeContainers = [
	projects, news
]

export const Types = (() => {
	let types: Array<{ type: 'document', name: string }> = []

	TypeContainers.forEach((typeContainer) => {
		types.push(typeContainer.document)
		types.push(typeContainer.taxonomy)
	})

	return types

})()

export default Types;