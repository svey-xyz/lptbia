import BUSINESS from '@/sanity/schemas/documents/businesses'
import PROJECTS from '@/sanity/schemas/documents/projects'
import NEWS from '@/sanity/schemas/documents/news'
// import BLOCKS from '@schemas/pages/blocks'
import PAGES from '@/sanity/schemas/pages'


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
import { features } from '@/sanity/schemas/settings/features'
import { sponsor } from '@/sanity/schemas/documents/sponsor'
import { contact } from '@/sanity/schemas/objects/contact'

const _documents = [settings, sponsor, features, contact]

export const types = [..._objects, ..._documents, ...PROJECTS, ...BUSINESS, ...NEWS, ...PAGES];