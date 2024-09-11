import { partial_Article } from "@/sanity/queries/partials"
import { groq } from "next-sanity"

export const single_Article = (partial?: string) => {
	return groq`
		*[_type == $type && slug.current == $slug][0] {
			${partial_Article},
			${partial}
		}
	`
}

export const bundle_Articles = (partial?: string) => {
	return groq`
		*[_type == $type] {
			${partial_Article},
			${partial}
		}
	`
}