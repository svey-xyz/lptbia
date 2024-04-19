import BUSINESS from '@schemas/documents/businesses'
import PROJECTS from '@schemas/documents/projects'
import NEWS from '@schemas/documents/news'
// import BLOCKS from '@schemas/pages/blocks'
import PAGES from '@schemas/pages'


/**
 * Objects
 */
import { social } from '@schemas/objects/social'
import { link } from '@schemas/objects/link'
import { basicDate } from '@schemas/objects/basicDate'
import { location } from '@schemas/objects/location'

import { basicBlockContent, extraBlockContent } from '@schemas/objects/blockContent'

const _objects = [social, link, basicDate, location, basicBlockContent, extraBlockContent]

/**
 * Documents
 */
import { settings } from '@schemas/settings/settings'
import { features } from '@schemas/settings/features'
import { sponsor } from '@schemas/documents/sponsor'
import { contact } from '@schemas/objects/contact'

const _documents = [settings, sponsor, features, contact]

export const types = [..._objects, ..._documents, ...PROJECTS, ...BUSINESS, ...NEWS, ...PAGES];
