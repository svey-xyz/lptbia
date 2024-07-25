import { groq } from "next-sanity";

/** QUERIES */
export const settingsQuery: string = groq`
	*[_id == "siteSettings"][0] {
		...,
		logo {
			...,
			"imageAsset":asset->,
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

export const blocksQuery: string = groq`
	blocks[] {
		...,
		_type == "FeaturedTaxonomies" => {
			...,
			taxonomies[]->,
		},
		_type == "NewsFeature" => {
			...,
			news[]-> {
				...,
				image {
					...,
					"imageAsset":asset->
				},
			},
		},
	}
`

export const pageQuery: string = groq`
	*[_type=='page' && slug.current == $slug][0] {
  	...,
		"slug":slug.current,
		${blocksQuery},
	}
`

export const archiveQuery: string = groq`
	*[_type=='archive' && _id == $archiveID][0] {
  	...,
		${blocksQuery},
	}
`

export const projectQuery = groq`
	*[_type=='project' && title == 'Barcelos Rooster'][0] {
  	...,
		image {
			...,
			"imageAsset":asset->
		},
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
		image {
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
		}
	}
`

export const businessesQuery = groq`
	*[_type=='business'] {
		...,
		address->,
		logo->,
	}
`

export const newsSingleQuery = groq`
	*[_type=='news' && slug.current == $slug][0] {
  	...,
		image {
			...,
			"imageAsset":asset->
		},
	}
`
export const newsQuery = groq`
	*[_type=='news'] {
  	...,
		image {
			...,
			"imageAsset":asset->
		},
	}
`
