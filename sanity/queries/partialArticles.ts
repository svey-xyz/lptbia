import { partial_ImageObject, partial_Artist } from "@/sanity/queries/partials";
import { groq } from "next-sanity";

export const project = groq`
	gallery[] {
		${partial_ImageObject}
	},
	artists[]->{
		${partial_Artist}
	},
	sponsors[]->{
		...,
		image {
			${partial_ImageObject}
		}
	}
`

export const business = groq`
	logo {
		${partial_ImageObject}
	},
	addresses[]->
`