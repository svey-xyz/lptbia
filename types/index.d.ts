import { Geopoint } from "@sanity/google-maps-input"
import { ImageAsset, Slug, PortableTextBlock, Image } from "sanity"
import { DocumentContainers } from '@/sanity/schemas/articles'

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

export interface geopoint {
	lng: number,
	lat: number,
}

export interface location extends inherentObjectData {
	location?: geopoint,
	unit?: string,
	number?: number,
	street?: string,
	notes?: string,
	preciseLocation?: boolean,
}

// export interface location extends inherentObjectData {
// 	number?: number,
// 	street?: string,
// 	unit?: string,
// 	location?:
// }

export interface link extends inherentObjectData {
	text?: string,
	type?: 'internal' | 'external',
	link?: string,
	page?: PagePayload,
}

export interface address extends inherentObjectData {
	icon?: icon,
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

export interface navigationItem extends inherentObjectData {
	title: string,
	pages?: Array<PagePayload | ArchivePayload>,
}

// BLOCKS

export interface block extends inherentObjectData {
	containerType: 'standard' | 'colour' | 'image' | 'video',
	video?: string,
	image?: sanityImage,
	colour?: undefined | 'accent',
}

export interface FeaturedTaxonomyBlockType extends block {
	taxonomies: Array<businessTaxonomyData>,
}

export interface TextBlockType extends block {
	title?: string,
	text?: PortableTextBlock,
	featuredImage?: sanityImage,
	link?: link,
}

export interface MapBlockType extends block {
	apiKey: string,
	centre: geopoint,
}

export interface NewsletterBlockType extends block {

}

export interface NewsFeatureBlockType extends block {
	title?: string,
	news?: Array<newsData>,
}

export interface InfoBlockType extends block {
	title?: string,
	items?: [
		{
			title?: string,
			subTitle?: string,
			infoType: 'icon' | 'number',
			icon?: icon,
			number?: number,
		},
	],
}

// import ARTICLES from '@/sanity/schemas/articles'

// const featuredTaxonomiesFields = ARTICLES.flatMap((article) => {
// 	return `featured_${taxonomyTitle(article.type)}`
// })

/**
 * featured taxonomy fields dynamically defined in /sanity/schema/pages/blocks/archive
 */

export interface ArchiveBlockType extends block {
	title?: string,
	description?: PortableTextBlock,
	archiveType: documentTypesWithArchives,
	featured_newsTaxonomy?: Array<newsTaxonomyData>,
	featured_businessTaxonomy?: Array<businessTaxonomyData>,
	featured_projectTaxonomy?: Array<projectTaxonomyData>,
	featured_addressTaxonomy?: Array<taxonomyData>,
}

export type BLOCK_TYPES = [FeaturedTaxonomyBlockType, TextBlockType, MapBlockType, NewsletterBlockType, NewsFeatureBlockType, ArchiveBlockType]



// DOCUMENT INTERFACES

export interface article extends inherentDocumentData {
	title: string,
	description?: PortableTextBlock,
	image?: sanityImage,
	taxonomies?: Array<taxonomyData>,
}

export interface taxonomyData extends inherentDocumentData {
	icon?: icon,
	prefLabel: string,
	definition?: string,
	related?: Array<taxonomyData>,
	broader?: Array<taxonomyData>,
	narrower?: Array<taxonomyData>,
}

export interface businessTaxonomyData extends taxonomyData {
}

export interface newsTaxonomyData extends taxonomyData {
}

export interface projectTaxonomyData extends taxonomyData {
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
	navigation?: Array<navigationItem>,
}

export interface BusinessPayload extends article {
	title: string,
	address?: address,
	logo?: sanityImage,
}

export interface PagePayload extends inherentDocumentData {
	title?: string,
	slug: string,
	blocks?: BLOCK_TYPES
}

export interface ArchivePayload extends inherentDocumentData {
	title?: string,
	blocks?: BLOCK_TYPES
}

export interface projectData extends article {
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

export interface newsData extends article {
	_type: "news",
	content?: PortableTextBlock,
	author?: string,
}

