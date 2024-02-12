/**
 * Objects
 */
import { social } from '@/studio/schemas/objects/social'
import { link } from '@/studio/schemas/objects/link'
import { basicDate } from '@/studio/schemas/objects/basicDate'
import { location } from '@/studio/schemas/objects/location'

const _objects = [social, link, basicDate, location]

/**
 * Documents
 */
import { sponsor } from '@/studio/schemas/documents/sponsor'
import { news } from '@/studio/schemas/documents/news'
import { project } from '@/studio/schemas/documents/project'
import { taxonomicTerm } from '@/studio/schemas/documents/taxonomy'
import { siteSettings } from '@/studio/schemas/settings/siteSettings'
import { featuredContent } from '@/studio/schemas/settings/featuredContent'

const _documents = [project, sponsor, news, taxonomicTerm, siteSettings, featuredContent]

export const types = [..._objects, ..._documents];
