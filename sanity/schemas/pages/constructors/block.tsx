import { camelCaseToWords } from "@lib/stringFunctions";
import { IconType } from "react-icons";
import { defineType, defineField, FieldDefinition } from "sanity";
import { mediaAssetSource } from "sanity-plugin-media";
import { RxSection } from "react-icons/rx";

type fields = FieldDefinition<"string" | "number" | "boolean" | "object" | "array" | "block" | "date" | "datetime" | "document" | "file" | "geopoint" | "image" | "reference" | "crossDatasetReference" | "slug" | "text" | "url" | "email" | "color", undefined>[]




export function block(
	args: {
		name: string,
		fields?: fields,
		// preview?: PreviewConfig<{
		// 	title: string;
		// 	image: string;
		// }, any> | undefined
		icon?: IconType | undefined
	}) {
	const { name, fields, icon } = args
	const generatedFields = fields?.map(field => {
		return field
	})
	const fieldsArray = generatedFields ? generatedFields : []

	return defineType({
		title: camelCaseToWords(name),
		name: name,
		type: 'object',
		icon,
		fields: [
			defineField({
				title: 'Title',
				name: 'title',
				type: 'string',
				validation: Rule => Rule.required()
			}),
			...fieldsArray
		],
		preview: {
			select: {
				type: '_type',
				title: 'title',
				// logo: 'logo',
			},
			prepare(value: any) {
				const { type, title } = value
				return {
					title: type ? camelCaseToWords(type) : 'Unknown Block Type',
					subtitle: title ? title : 'No title!',
					media: icon ? icon : RxSection,
				}
			},
		},
	})
}