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

export interface object_Social extends inherentObjectData {
	socialType: 'twitter' | 'instagram' | 'facebook' | 'vimeo' | 'linkedin' | 'github',
	socialTitle: string,
	url: string,
}

export interface object_Date extends inherentObjectData {
	displayDateSpecificity: 'YYYY-MM-DD, HH:mm' | 'YYYY-MM-DD' | 'YYYY-MM' | 'YYYY',
	recurrence: '' | 'RRULE:FREQ=DAILY;INTERVAL=1' | 'RRULE:FREQ=WEEKLY;INTERVAL=1' | 'RRULE:FREQ=MONTHLY;INTERVAL=1' | 'RRULE:FREQ=YEARLY;INTERVAL=1',
	startDate?: string,
	endDate?: string,
}

export interface geopoint {
	lng: number,
	lat: number,
}

export interface object_Location extends inherentObjectData {
	location?: geopoint,
	unit?: string,
	number?: number,
	street?: string,
	notes?: string,
	preciseLocation?: boolean,
}

export interface object_Link extends inherentObjectData {
	text?: string,
	type?: 'internal' | 'external',
	link?: string,
	page?: PagePayload,
}

export interface icon {
	_type: 'icon',
	name: string,
}

export interface object_NavigationItem extends inherentObjectData {
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

export interface block_FeaturedTaxonomies extends block {
	taxonomies: Array<taxonomy_Business>,
}

export interface block_Text extends block {
	title?: string,
	text?: PortableTextBlock,
	featuredImage?: sanityImage,
	link?: object_Link,
}

export interface block_Map extends block {
	apiKey: string,
	centre: geopoint,
}

export interface block_Newsletter extends block {

}

export interface block_FeaturedArticles extends block {
	title?: string,
	articles?: _ARTICLE_TYPES,
}

export interface block_Info extends block {
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

export interface block_Archive extends block {
	title?: string,
	description?: PortableTextBlock,
	archiveType: documentTypesWithArchives,
	filterable?: boolean,
	featured_newsTaxonomy?: Array<taxonomy_News>,
	featured_businessTaxonomy?: Array<taxonomy_Business>,
	featured_projectTaxonomy?: Array<taxonomy_Project>,
	featured_addressTaxonomy?: Array<taxonomy>,
}

export type _BLOCK_TYPES = [block_FeaturedTaxonomies, block_Text, block_Map, block_Newsletter, block_FeaturedArticles, block_Archive]



// DOCUMENT INTERFACES

export type _ARTICLE_TYPES = [
	article_Business, article_Project, article_News, article_Address
]

export interface article extends inherentDocumentData {
	title: string,
	slug: string,
	description?: PortableTextBlock,
	image?: sanityImage,
	taxonomies?: Array<taxonomy>,
}

export interface article_News extends article {
	_type: "news",
	content?: PortableTextBlock,
	author?: string,
}

export interface article_Project extends article {
	writeup?: PortableTextBlock,
	credits?: PortableTextBlock,
	gallery?: Array<sanityImage>,
	media?: Array<any>, // needs type definition
}

export interface article_Business extends article {
	addresses?: Array<article_Address>,
	logo?: sanityImage,
	publicContact?: {
		website?: string,
		socials?: Array<object_Social>
	}
}

export interface article_Address extends article {
	icon?: icon,
	// location?: object_Location,
	location: geopoint,
	unit?: string,
	number?: number,
	street?: string,
	notes: string,
}

export interface taxonomy extends inherentDocumentData {
	icon?: icon,
	prefLabel: string,
	definition?: string,
	related?: Array<taxonomy>,
	broader?: Array<taxonomy>,
	narrower?: Array<taxonomy>,
}

export interface taxonomy_Business extends taxonomy {
}

export interface taxonomy_News extends taxonomy {
}

export interface taxonomy_Project extends taxonomy {
}

export interface sponsor extends inherentDocumentData {
	title: string,
	image?: sanityImage,
	website?: string,
	socials?: Array<object_Social>,
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
	socials?: Array<object_Social>,
	about?: PortableTextBlock,
	landAcknowledgement?: PortableTextBlock,
	partners?: Array<sponsor>,
	location?: object_Location,
	homepage?: PagePayload,
	navigation?: Array<object_NavigationItem>,
}

export interface PagePayload extends inherentDocumentData {
	title?: string,
	slug: string,
	blocks?: _BLOCK_TYPES
}

export interface ArchivePayload extends inherentDocumentData {
	title?: string,
	blocks?: _BLOCK_TYPES
}