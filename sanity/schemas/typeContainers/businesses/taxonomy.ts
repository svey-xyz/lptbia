import { defineField, defineType } from "sanity";

import { mediaAssetSource } from "sanity-plugin-media";
import { FaTag } from "react-icons/fa6";
import constructors from "@/sanity/schemas/pages/constructors"

const fields = [
	{
		name: 'icon',
		title: 'Icon',
		type: 'icon',
	},
]

export const taxonomy = constructors.taxonomy({ documentType: 'business', fields, icon: FaTag })