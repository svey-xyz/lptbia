import { MdSettings } from "react-icons/md";
import { StructureBuilder } from "sanity/desk";
import { DocumentActionComponent, DocumentActionsContext, Template } from "sanity";
import { AiFillInfoCircle, AiFillStar } from "react-icons/ai";
import { types } from "@sanityStudio/schema";

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"])

// Define the singleton document types
const singletonTypes = new Set(["siteSettings", "navigation", "theme", "about"])



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
				S.documentTypeListItem('artist').title('Artists'),
				S.documentTypeListItem('artistGroup').title('Artist Groups'),
				S.documentTypeListItem('sponsor').title('Sponsors'),
				S.documentTypeListItem('host').title('Hosts'),
			])
		),
		S.documentTypeListItem('taxonomicTerm').title('Taxonomies'),

		S.divider(),

		/** NEWS */
		S.documentTypeListItem('news'),

		/** PROGRAM */
		S.documentTypeListItem('program').title('Programs'),

		/** PROJECTS */
		S.documentTypeListItem('project').title('Projects'),
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