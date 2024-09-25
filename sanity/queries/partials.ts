import { groq } from "next-sanity"

export const partial_ImageObject: string = groq`
	...,
	"imageAsset":asset->
`

export const partial_Sections: string = groq`
	sections[] {
		...,
		blocks[] {
			...,
			_type == "FeaturedTaxonomies" => {
				...,
				taxonomies[]->,
			},
			_type == "FeaturedArticles" => {
				...,
				articles[]-> {
					...,
					image {
						${partial_ImageObject}
					}
				},
			},
			_type == "Hero" => {
				...,
				featuredImage {
					${partial_ImageObject}
				}
			},
		}
	}
`

export const partial_Article: string = groq`
	...,
	title,
	"slug":slug.current,
	description,
	taxonomies[]->,
	image {
		${partial_ImageObject}
	}
`

export const partial_Artist: string = groq`
	...,
	"slug":slug.current,
	tags[]->,
	image {
		${partial_ImageObject}
	}
`