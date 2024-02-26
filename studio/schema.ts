import Business from '@schemas/documents/businesses'

/**
 * Objects
 */
import { social } from '@schemas/objects/social'
import { link } from '@schemas/objects/link'
import { basicDate } from '@schemas/objects/basicDate'
import { location } from '@schemas/objects/location'
import { basicBlockContent, extraBlockContent } from '@schemas/objects/blockContent'
import { taxonomy } from '@schemas/objects/taxonomy'


const _objects = [social, link, basicDate, location, basicBlockContent, extraBlockContent, taxonomy, Business.taxonomy, Business.warning]

/**
 * Documents
 */
import { news } from '@schemas/documents/news'
import { project } from '@schemas/documents/project'
import { settings } from '@schemas/settings/settings'
import { features } from '@schemas/settings/features'

const _documents = [project, news, settings, features, Business.business]

export const types = [..._objects, ..._documents];
