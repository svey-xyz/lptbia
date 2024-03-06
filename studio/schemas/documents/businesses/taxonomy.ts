import { defineField, defineType } from "sanity";

import { mediaAssetSource } from "sanity-plugin-media";
import { FaTag } from "react-icons/fa6";
import constructors from "@studio/lib/constructors"

const fields = [
	{
		name: 'icon',
		title: 'Icon',
		type: 'icon',
	},
	]

export const taxonomy = constructors.taxonomy({ name: 'businessTaxonomy', fields, icon: FaTag })