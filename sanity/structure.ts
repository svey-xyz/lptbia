import { MdSettings } from "react-icons/md";
import { StructureBuilder } from "sanity/structure";
import { DocumentActionComponent, DocumentActionsContext, Template } from "sanity";
import { AiFillInfoCircle, AiFillStar } from "react-icons/ai";

import { types } from "@/sanity/schema";
import { RiGalleryView, RiPagesLine } from "react-icons/ri";
import { TypeContainers } from "@/sanity/schemas/typeContainers";
import { camelCaseToWords, pluralize } from "@/lib/stringFunctions";
import { FaTag } from "react-icons/fa6";
import { typeContainer } from "@/sanity/schemas/typeContainers/constructors/container";


// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set(["siteSettings", "navigation", "theme", "about", "archive"])

const archivePages = (S: StructureBuilder) => TypeContainers.map(typeContainer => {
	if (typeContainer.child) return

	return S.listItem().title(`${typeContainer.document.name}`).icon(RiPagesLine).child(
		(S.document().title(`${typeContainer.document.name}`).schemaType('archive').documentId(`${typeContainer.document.name}`))
	)
}).filter((item)=>{ return item !== undefined})

const documentTaxonomiesListItem = (S: StructureBuilder, typeContainer: typeContainer) => {
	if (!typeContainer.taxonomy) return
	const Title = camelCaseToWords(typeContainer.type)

	return S.documentTypeListItem(typeContainer.taxonomy.name).title(`${Title} Taxonomies`).icon(FaTag)
}

const documentTypes = (S: StructureBuilder) => TypeContainers.map(typeContainer => {
	const Title = camelCaseToWords(typeContainer.type)

	const ChildTaxonomies = (typeContainer.childTypes?.map((typeContainer) => {
		return documentTaxonomiesListItem(S, typeContainer)
	}))?.filter((item) => { return item !== undefined})

	const Taxonomies = typeContainer.taxonomy ? [
		documentTaxonomiesListItem(S, typeContainer)!,
		...ChildTaxonomies || [],
		S.divider(),
	] : []

	const Children = typeContainer.childTypes?.map((childTypeContainer) => {
		return S.documentTypeListItem(childTypeContainer.document.name).title(pluralize(camelCaseToWords(childTypeContainer.type)))
	})

	if (typeContainer.child) return
	return S.listItem().title(pluralize(Title)).icon(typeContainer.document.icon as any).child(
		S.list().title(pluralize(Title)).items([
			...Taxonomies,
			S.documentTypeListItem(typeContainer.document.name).title(pluralize(Title)),
			...Children || []
		]),
	)
}).filter((item) => { return item !== undefined })


export const structure = (S: StructureBuilder) =>
	S.list().title('Content').items([
		/** ABOUT */
		S.listItem().title('About').icon(AiFillInfoCircle).child(
			S.list().title('About').items([
				S.listItem().title('Site Settings').icon(MdSettings).child(
					S.document().title('Site Settings').schemaType('siteSettings').documentId('siteSettings')
				),
				S.listItem().title('Featured Content').icon(AiFillStar).child(
					S.document().title('Featured Content').schemaType('featuredContent').documentId('featuredContent')
				),

				S.divider(),

				S.documentTypeListItem('sponsor').title('Sponsors'),

			]),
		),
		S.listItem().title('Pages').icon(RiPagesLine).child(
			S.list().title('Pages').items([
				S.listItem().title('Archives').icon(RiGalleryView).child(
					S.list().title('Archives').items([
						...archivePages(S)
					])
				),

				S.divider(),

				S.documentTypeListItem('page').title('Pages').icon(RiPagesLine),

			]),
		),
		// S.documentTypeListItem('page').title('Pages').icon(RiPagesLine),

		S.divider(),
		// S.listItem().title('Businesses').icon(IoStorefront).child(
		// 	S.list().title('Businesses').items([ 
		// 		S.documentTypeListItem('businessTaxonomy').title('Taxonomies'),
		// 		S.divider(),
		// 		S.documentTypeListItem('business').title('Directory'),
		// 		S.listItem().title('Addresses').icon(FaSignsPost).child(
		// 			S.documentTypeList('address')
		// 				.child(id =>
		// 					S.document()
		// 						.schemaType('address')
		// 						.documentId(id)
		// 						.views([
		// 							// The default form for editing a document
		// 							S.view
		// 								.form(),
		// 							S.view
		// 								.component(DocumentsPane)
		// 								.options({
		// 									query: `*[references($id)]`,
		// 									params: { id: `_id` },
		// 									options: { perspective: 'previewDrafts' },
		// 									useDraft: true,
		// 								})
		// 								.title('Businesses at this address')
		// 						])
		// 				)
		// 		),
				
		// 	]),
			
			
		// ),
		...documentTypes(S),

		/** PROJECTS */
		// S.documentTypeListItem('project').title('Projects'),
	])
	

export const schemaOptions = {
	types: types,
	// Filter out singleton types from the global “New document” menu options
	templates: (templates: Template<any, any>[]) => templates.filter(({ schemaType }: { schemaType: string }) => !singletonTypes.has(schemaType)),
}
export const documentOptions = {
	// For singleton types, filter out actions that are not explicitly included
	// in the `singletonActions` list defined above
	actions: (input: DocumentActionComponent[], context: DocumentActionsContext) =>
		singletonTypes.has(context.schemaType)
			? input.filter(({ action }) => action && singletonActions.has(action))
			: input,
}