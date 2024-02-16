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
import { sponsor } from '@schemas/documents/sponsor'
import { news } from '@schemas/documents/news'
import { project } from '@schemas/documents/project'
import { taxonomicTerm } from '@schemas/documents/taxonomy'
import { siteSettings } from '@schemas/settings/siteSettings'
import { featuredContent } from '@schemas/settings/featuredContent'

const _documents = [project, sponsor, news, taxonomicTerm, siteSettings, featuredContent]

export const types = [..._objects, ..._documents];
