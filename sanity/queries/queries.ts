import { groq } from "next-sanity";

/** PARTIALS */
const partial_ImageObject: string = groq`
	...,
	"imageAsset":asset->
`

const partial_Blocks: string = groq`
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
	}
`

const partial_Article: string = groq`
	...,
	title,
	"slug":slug.current,
	description,
	taxonomies[]->,
	image {
		${partial_ImageObject}
	}
`

const partial_Artist: string = groq`
	...,
	"slug":slug.current,
	tags[]->,
	image {
		${partial_ImageObject}
	}
`

export const partial_Project = groq`
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

/** QUERIES */

export const settingsQuery: string = groq`
	*[_id == "siteSettings"][0] {
		...,
		logo {
			${partial_ImageObject}
		},
		homepage->{
			"slug":slug.current,
		},
		navigation[]{
			// ...,
			title,
			pages[]->,
		},
	}
`

export const pageQuery: string = groq`
	*[_type=='page' && slug.current == $slug][0] {
  	...,
		"slug":slug.current,
		${partial_Blocks},
	}
`

export const archiveQuery: string = groq`
	*[_type=='archive' && _id == $archiveID][0] {
  	...,
		${partial_Blocks},
	}
`

export const single_Article = groq`
	*[_type == $type && slug.current == $slug][0] {
		${partial_Article}
	}
`

export const bundle_Articles = groq`
	*[_type == $type] {
		${partial_Article},
		'content':$partial
	}
`

