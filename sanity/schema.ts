// import BUSINESS from '@/sanity/schemas/typeContainers/businesses'
// import PROJECTS from '@/sanity/schemas/documents/projects'
// import NEWS from '@/sanity/schemas/documents/news'
// import BLOCKS from '@schemas/pages/blocks'
import { DocumentDefinition } from 'sanity'

import PAGES from '@/sanity/schemas/pages'

import ARTICLES from '@/sanity/schemas/articles'

const ARTICLE_TYPES = (() => {
	let types: DocumentDefinition[] = []

	ARTICLES.forEach((article) => {
		types.push(article.document)
		types.push(article.taxonomy)
	})

	return types
})()

/**
 * Objects
 */
import { social } from '@/sanity/schemas/objects/social'
import { link } from '@/sanity/schemas/objects/link'
import { basicDate } from '@/sanity/schemas/objects/basicDate'
import { location } from '@/sanity/schemas/objects/location'

import { basicBlockContent, extraBlockContent } from '@/sanity/schemas/objects/blockContent'

const _objects = [social, link, basicDate, location, basicBlockContent, extraBlockContent]

/**
 * Documents
 */
import { settings } from '@/sanity/schemas/settings/settings'
import { contact } from '@/sanity/schemas/objects/contact'

const _documents = [settings, contact]

// Temp fix till converted to Article
import { sponsor } from '@schemas/articles/sponsor'

export const types = [..._objects, ..._documents, ...PAGES, ...ARTICLE_TYPES, sponsor];
