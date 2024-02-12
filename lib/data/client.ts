import { createClient } from 'next-sanity'
import { projectId, dataset, apiVersion } from '@lib/data/env'

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false,
	perspective: 'published',
})

export default client;