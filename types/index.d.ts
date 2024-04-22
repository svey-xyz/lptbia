import { ImageAsset, Slug, PortableTextBlock, Image } from "sanity"

export interface inherentObjectData {
	_key?: string,
	_type: string,
}

export interface inherentDocumentData {
	_updatedAt: string,
	_createdAt: string,
	_rev: string,
	_type: string,
	_id: string
}

// OBJECT INTERFACES

export interface sanityImage extends Image {
	imageAsset: ImageAsset
}

export interface socialData extends inherentObjectData {
	socialType: 'twitter' | 'instagram' | 'facebook' | 'vimeo' | 'linkedin' | 'github',
	socialTitle: string,
	url: string,
}

export interface dateData extends inherentObjectData {
	displayDateSpecificity: 'YYYY-MM-DD, HH:mm' | 'YYYY-MM-DD' | 'YYYY-MM' | 'YYYY',
	recurrence: '' | 'RRULE:FREQ=DAILY;INTERVAL=1' | 'RRULE:FREQ=WEEKLY;INTERVAL=1' | 'RRULE:FREQ=MONTHLY;INTERVAL=1' | 'RRULE:FREQ=YEARLY;INTERVAL=1',
	startDate?: string,
	endDate?: string,
}

// export interface location extends inherentObjectData {
// 	location?: {
// 		lng: number,
// 		lat: number,
// 	},
// 	unit?: string,
// 	number?: number,
// 	street?: string,
// 	notes?: string,
// 	preciseLocation?: boolean,
// }

export interface location extends inherentObjectData {
		lat: number,
		lng: number,
}

export interface link extends inherentObjectData {
	text: string,
	type: 'internal' | 'external' | undefined,
	link: string,
}

export interface address extends inherentObjectData {
	location?: location,
	notes: string,
}

export interface icon {
	_type: 'icon',
	name: string,
}

export interface frontpageFeature extends inherentObjectData {
	title: string,
	textContent: PortableTextBlock,
	link: link,
	image: sanityImage,
}

// BLOCKS

export interface block extends inherentObjectData {
	backdrop: 'video' | 'colour' | 'image',
	video?: string,
	image?: sanityImage,
	colour?: undefined | 'accent',
}

export interface featuredTaxonomy extends block {
	taxonomies: Array<businessTaxonomyData>,
}

export interface map extends block {

}

export interface feature extends block {
	title: string,
	text: block,
	image: sanityImage,
	link: link,
}

export interface newsFeature extends block {
	title: string,
	news: Array<newsData>,
}

export interface newsletter extends block {

}


// DOCUMENT INTERFACES

export interface document extends inherentDocumentData {
	title?: string,
	image?: sanityImage,
	date?: dateData,
	location?: location,
	taxonomies?: Array<taxonomyData>,
	links?: Array<link>,

}

export interface taxonomyData extends inherentDocumentData {
	termVisibility?: boolean,
	prefLabel: string,
	definition?: string,
	related?: Array<taxonomyData>,
	broader?: Array<taxonomyData>,
	narrower?: Array<taxonomyData>,
}

export interface businessTaxonomyData extends taxonomyData {
	icon: icon,
}

export interface sponsorData extends inherentDocumentData {
	title: string,
	image?: sanityImage,
	website?: string,
	socials?: Array<socialData>,
	about?: PortableTextBlock,
}

export interface SettingsPayload extends inherentDocumentData {
	title: string,
	logo?: sanityImage,
	motto?: string,
	blurb?: string,
	keywords?: Array<string>,
	contactEmail?: string,
	phoneNumber?: string,
	socials?: Array<socialData>,
	about?: PortableTextBlock,
	landAcknowledgement?: PortableTextBlock,
	partners?: Array<sponsorData>,
	location?: location,
	homepage?: PagePayload,
}

export interface PagePayload extends inherentDocumentData {
	title?: string,
	slug: string,
	blocks?: Array<feature | featuredTaxonomy | map | newsFeature | newsletter>
}

export interface projectData extends document {
	writeup?: PortableTextBlock,
	credits?: PortableTextBlock,
	gallery?: Array<sanityImage>,
	media?: Array<any>, // needs type definition
}

export interface featuredContentData extends inherentDocumentData {
	frontpageFeature?: frontpageFeature,
	heroImages?: Array<sanityImage>,
	video?: string,
	news?: Array<newsData>,
	businessTaxonomies?: Array<businessTaxonomyData>,
}

export interface newsData extends document {
	_type: "news",
	content?: PortableTextBlock,
	author?: string,
}

