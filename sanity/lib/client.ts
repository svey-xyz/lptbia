import { createClient } from 'next-sanity'
import { projectId, dataset, apiVersion } from './api'

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: false,
	perspective: 'published',
})

export default client;