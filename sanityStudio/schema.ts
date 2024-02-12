/**
 * Objects
 */
import { basicBlockContent, extraBlockContent } from '@schemas/objects/blockContent'
import { social } from '@schemas/objects/social'
import { link } from '@schemas/objects/link'
import { basicDate } from '@schemas/objects/basicDate'
import { basicDocumentOptions } from '@/sanityStudio/lib/basicDocumentOptions'
import { location } from '@schemas/objects/location'

const _objects = [basicBlockContent, extraBlockContent, social, link, basicDate, basicDocumentOptions, location]

/**
 * Documents
 */
import { artist } from '@schemas/documents/artist'
import { artistGroup } from '@schemas/documents/artistGroup'
import { sponsor } from '@schemas/documents/sponsor'
import { host } from '@schemas/documents/host'
import { news } from '@schemas/documents/news'
import { project } from '@schemas/documents/project'
import { program } from '@schemas/documents/program'
import { taxonomicTerm } from '@schemas/documents/taxonomy'
import { siteSettings } from '@schemas/settings/siteSettings'
import { featuredContent } from '@schemas/settings/featuredContent'

const _documents = [project, artist, artistGroup, sponsor, host, news, program, taxonomicTerm, siteSettings, featuredContent]

export const types = [..._objects, ..._documents];
