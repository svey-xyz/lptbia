import { groq } from "next-sanity";

/** QUERIES */
const basicDocumentOptionsQuery: string = groq`
	basicDocumentOptions {
		...,
		tags[]->,
		image {
			...,
			"imageAsset":asset->
		}
	}
`
export const settingsQuery: string = groq`
	*[_id == "siteSettings"][0]
`
export const featuredQuery: string = groq`
	*[_id == "featuredContent"] {
		...,
		frontpageContent[]{
			...,
			featuredContent-> {
				...,
				"data":basicDocumentOptions {
					...,
					tags[]->,
					image {
						...,
						"imageAsset":asset->
					}
				}
			},
			image {
				...,
			"imageAsset":asset->
			}
		},
		news[] {
			...,
			featuredContent-> {
				...,
				"data":basicDocumentOptions {
					...,
					tags[]->,
					image {
						...,
						"imageAsset":asset->
					}
				},
				image {
					...,
					"imageAsset":asset->
				},
			}
		},
	}[0]
`
export const projectQuery = groq`
	*[_type=='project' && basicDocumentOptions.slug.current == $slug][0] {
		'data':basicDocumentOptions {
			...,
			tags[]->,
			image {
				...,
				"imageAsset":asset->
			}
		},
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
		'data':basicDocumentOptions {
			...,
			tags[]->,
			image {
				...,
				"imageAsset":asset->
			}
		},
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
	*[_type=='news' && basicDocumentOptions.slug.current == $slug][0] {
		'data':basicDocumentOptions {
			...,
			tags[]->,
			image {
				...,
				"imageAsset":asset->
			}
		},
  	...,
	}
`
export const newsQuery = groq`
	*[_type=='news'] {
		'data':basicDocumentOptions {
			...,
			tags[]->,
			image {
				...,
				"imageAsset":asset->
			}
		},
  	...,
	}
`

export const artistsQuery = groq`
	*[_type=='artist' || _type=='artistGroup'] {
		...,
		"slug":slug.current,
		tags[]->,
		image {
			...,
			"imageAsset":asset->,
		},
	}
`

export const artistQuery = groq`
	*[(_type=='artist' || _type=='artistGroup') && slug.current == $slug][0] {
		...,
		"slug":slug.current,
		tags[]->,
		image {
			...,
			"imageAsset":asset->,
		},
	}
`
