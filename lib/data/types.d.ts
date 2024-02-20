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
	socialType: string,
	socialTitle: string,
	url: string,
}

export interface dateData extends inherentObjectData {
	displayDateSpecificity: 'YYYY-MM-DD, HH:mm' | 'YYYY-MM-DD' | 'YYYY-MM' | 'YYYY',
	recurrence: '' | 'RRULE:FREQ=DAILY;INTERVAL=1' | 'RRULE:FREQ=WEEKLY;INTERVAL=1' | 'RRULE:FREQ=MONTHLY;INTERVAL=1' | 'RRULE:FREQ=YEARLY;INTERVAL=1',
	startDate?: string,
	endDate?: string,
}

export interface locationData extends inherentObjectData {
	location: {
		lng: number,
		lat: number,
	},
	address: string,
	notes: string,
	preciseLocation: boolean,
}


// DOCUMENT INTERFACES

export interface taxonomyData extends inherentDocumentData {
	termVisibility?: boolean,
	prefLabel: string,
	definition?: string,
	related?: Array<taxonomyData>,
	broader?: Array<taxonomyData>,
	narrower?: Array<taxonomyData>,
}

export interface sponsorData extends inherentDocumentData {
	title: string,
	image?: sanityImage,
	website?: string,
	socials?: Array<socialData>,
	about?: PortableTextBlock,
}

export interface settingsData extends inherentDocumentData {
	title: string,
	logo?: sanityImage,
	blurb?: string,
	keywords?: Array<string>,
	contactEmail?: string,
	phoneNumber?: string,
	socials?: Array<socialData>,
	about?: PortableTextBlock,
	landAcknowledgement?: PortableTextBlock,
	partners?: Array<sponsorData>,
	location?: locationData
}

export interface projectData extends inherentDocumentData {
	writeup?: PortableTextBlock,
	credits?: PortableTextBlock,
	gallery?: Array<sanityImage>,
	media?: Array<any>, // needs type definition
}

export interface featuredContentData extends inherentDocumentData {
	frontpageContent?: Array<{ featuredContent: simpleDocument, image?: sanityImage }>,
	frontpageText?: { textContent: PortableTextBlock, link: string },
	news?: Array<{ featuredContent: newsData, image?: sanityImage }>
}

export interface newsData extends inherentDocumentData {
	_type: "news",
	content?: PortableTextBlock,
	author?: string,
}

export interface social {
	socialTitle: string,
	socialType: 'twitter' | 'instagram' | 'facebook' | 'vimeo' | 'linkedin' | 'github',
	url: string,
}