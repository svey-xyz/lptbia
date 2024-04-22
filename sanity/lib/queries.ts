import { groq } from "next-sanity";

/** QUERIES */
export const settingsQuery: string = groq`
	*[_id == "siteSettings"][0] {
		...,
		logo {
			...,
			"imageAsset":asset->,
		},
		homepage->,
	}
`

export const pageQuery: string = groq`
	*[_type=='page' && slug.current == $slug][0] {
  	...,
	}
`

export const featuredQuery: string = groq`
	*[_id == "featuredContent"] {
		...,
		frontpageFeature{
			...,
			image {
				...,
			"imageAsset":asset->
			}
		},
		heroImages[]{
			...,
			"imageAsset":asset->
		},
		news[]-> {
			...,
			image {
				...,
				"imageAsset":asset->
			},
		},
		businessTaxonomies[]->
	}[0]
`
export const projectQuery = groq`
	*[_type=='project' && slug.current == $slug][0] {
  	...,
		gallery[] {
			...,
				"imageAsset":asset->
		},
		artists[]->{
			...,
			"slug":slug.current,
			tags[]->,
			image {
				...,
				"imageAsset":asset->
			}
		},
		sponsors[]->{
			...,
			image {
				...,
				"imageAsset":asset->
			}
		}
	}
`
export const projectsQuery = groq`
	*[_type=='project'] {
  	...,
		artists[]->{
			...,
			"slug":slug.current,
			tags[]->,
			image {
				...,
				"imageAsset":asset->
			}
		}
	}
`
export const newsSingleQuery = groq`
	*[_type=='news' && slug.current == $slug][0] {
  	...,
	}
`
export const newsQuery = groq`
	*[_type=='news'] {
  	...,
	}
`
