// import BUSINESS from '@/sanity/schemas/typeContainers/businesses'
// import PROJECTS from '@/sanity/schemas/documents/projects'
// import NEWS from '@/sanity/schemas/documents/news'
// import BLOCKS from '@schemas/pages/blocks'
import PAGES from '@/sanity/schemas/pages'

import DOCUMENT_TYPES from '@/sanity/schemas/typeContainers'


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
import { sponsor } from '@/sanity/schemas/typeContainers/sponsor'
import { contact } from '@/sanity/schemas/objects/contact'

const _documents = [settings, sponsor, contact]

export const types = [..._objects, ..._documents, ...PAGES, ...DOCUMENT_TYPES];
