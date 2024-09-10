import 'server-only'

import * as queryStore from '@sanity/react-loader'
import { draftMode } from 'next/headers'
import dynamic from 'next/dynamic'

import {
	pageQuery,
	businessesQuery,
	businessQuery,
	settingsQuery,
	archiveQuery,
	bundle_Articles,
	newsQuery,
	newsSingleQuery,
	projectQuery,
	projectsQuery,
	single_Article,
} from '@/sanity/queries/queries'

import {
	PagePayload,
	article_Business,
	SettingsPayload,
	ArchivePayload,
	article_News,
	article_Project,
	article,
} from '@/types'

import type { ContentSourceMap, QueryOptions, QueryParams, SanityClient } from "@sanity/client";
import { client } from "../lib/client";
import { capitalize, pluralize } from '@/lib/stringFunctions'

export const token = process.env.SANITY_API_READ_TOKEN;

const serverClient: SanityClient = client.withConfig({
	token,
	// Enable stega if it's a Vercel preview deployment, as the Vercel Toolbar has controls that shows overlays
	stega: process.env.VERCEL_ENV === 'preview',
})

/**
 * Sets the server client for the query store, doing it here ensures that all data fetching in production
 * happens on the server and not on the client.
 * Live mode in `sanity/presentation` still works, as it uses the `useLiveMode` hook to update `useQuery` instances with
 * live draft content using `postMessage`.
 */
queryStore.setServerClient(serverClient)

const usingCdn = serverClient.config().useCdn

export const loadQuery = (<T>(query: string, params: QueryParams = {}, options: QueryOptions = {}) => {
	const {
		perspective = draftMode().isEnabled ? 'previewDrafts' : 'published',
	} = options
	// Don't cache by default
	let revalidate: NextFetchRequestConfig['revalidate'] = 0
	// If `next.tags` is set, and we're not using the CDN, then it's safe to cache
	if (!usingCdn && Array.isArray(options.next?.tags)) {
		revalidate = false
	} else if (usingCdn) {
		revalidate = 60
	}
	return queryStore.loadQuery(query, params, {
		...options,
		next: {
			revalidate,
			...(options.next || {}),
		},
		perspective,
		// Enable stega if in Draft Mode, to enable overlays when outside Sanity Studio
		stega: draftMode().isEnabled,
	}) as Promise<{ data: T, sourceMap: ContentSourceMap }>
}) satisfies typeof queryStore.loadQuery

export function loadSettings() {
	return loadQuery<SettingsPayload>(
		settingsQuery,
		{},
		{ next: { tags: ['settings', 'home', 'page'] } },
	)
}

export const load_singleArticle = async (type: string, slug: string) => {
	let partial = await dynamic(() => import(`@/sanity/queries/articles/article`))
	console.log('Type: ', type)
	console.log('Slug: ', slug)
	// try {
	// 	partial = dynamic(() => import(`@/sanity/queries/articles/${capitalize(type)}`))
	// } catch (e) {
	// 	partial = dynamic(() => import(`@/sanity/queries/articles/article`))
	// }
	// console.log('Partial: ', partial)

	return loadQuery<Array<article>>(
		single_Article,
		{
			type,
			slug,
			// partial: ''
		},
		{ next: { tags: [type, pluralize(type), 'article', 'articles'] } },
	)
}

export const loadArticles = async(type: string) => {
	let partial = await dynamic(() => import(`@/sanity/queries/articles/article`))

	// try {
	// 	partial = dynamic(() => import(`@/sanity/queries/articles/${capitalize(type)}`))
	// } catch (e) {
	// 	partial = dynamic(() => import(`@/sanity/queries/articles/article`))
	// }
	console.log('Partial: ', partial)

	return loadQuery<Array<article>>(
		bundle_Articles,
		{
			type,
			partial:''
		},
		{ next: { tags: [type, pluralize(type), 'article', 'articles'] } },
	)
}

export function loadBusinesses() {
	return loadQuery<Array<article_Business>>(
		businessesQuery,
		{},
		{ next: { tags: ['business', 'businesses', 'page'] } },
	)
}

export function loadBusiness(slug: string) {
	return loadQuery<article_Business>(
		businessQuery,
		{ slug },
		{ next: { tags: ['business', 'businesses', 'page'] } },
	)
}

export function loadProjects() {
	return loadQuery<Array<article_Project>>(
		projectsQuery,
		{},
		{ next: { tags: ['project', 'projects', 'page'] } },
	)
}

export function loadProject(slug: string) {
	return loadQuery<article_Project>(
		projectQuery,
		{ slug },
		{ next: { tags: ['project', 'projects', 'page'] } },
	)
}

export function loadNews() {
	return loadQuery<Array<article_News>>(
		newsQuery,
		{},
		{ next: { tags: ['news', 'page'] } },
	)
}

export function loadNewsSingle(slug: string) {
	return loadQuery<article_News>(
		newsSingleQuery,
		{ slug },
		{ next: { tags: ['news', 'page'] } },
	)
}

export function loadPage(slug: string) {
	return loadQuery<PagePayload | null>(
		pageQuery,
		{ slug },
		{ next: { tags: [`page:${slug}`, 'home'] } },
	)
}

export function loadArchive(archiveID: string) {
	return loadQuery<ArchivePayload | null>(
		archiveQuery,
		{ archiveID },
		{ next: { tags: [`archive:${archiveID}`, 'archive'] } },
	)
}