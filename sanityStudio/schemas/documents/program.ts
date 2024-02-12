import { defineType, defineField, defineArrayMember } from "sanity";
import { mediaAssetSource } from "sanity-plugin-media";

import { BsCalendarEvent } from 'react-icons/bs';
import { basicDocumentConstructor } from "@/sanityStudio/lib/basicDocumentConstructor";

export const program = basicDocumentConstructor({
	name: 'program',
	contentFields: [
	],
	icon: BsCalendarEvent
})