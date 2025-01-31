import 'server-only'

import { groq } from 'next-sanity'

import { client } from '@/sanity/lib/client'
import { token } from '@/sanity/lib/token'

// Used in `generateStaticParams`
export const generateStaticSlugs = async (type: string) => {
	const pathnames = await client
		.withConfig({
			token,
			perspective: 'published',
			useCdn: false,
			stega: false,
		})
		.fetch<{ slug?: { current?: string } }[]>(
			groq`*[_type == $type && defined(slug.current)]{slug}`,
			{ type },
			{
				next: {
					tags: [type],
				},
			},
		)

	return pathnames.flatMap((path) => {
		return { slug: [path.slug?.current] }
	})
}

export const generateStaticSlugsForArchives = async () => {
	const archives = await client
		.withConfig({
			token,
			perspective: 'published',
			useCdn: false,
			stega: false,
		})
		.fetch<{ _id: string, type: string }[]>(
			groq`*[_type == 'archive']{_id, type}`,
			{ type: 'archive' },
			{
				next: {
					tags: ['archive'],
				},
			},
		)

	return archives.flatMap((archive) => {
		return { slug: archive._id }
	})
}

export const generateStaticSlugsForArticles = async () => {
	const articleTypes = ['project', 'news', 'address'] // skip generating for bussinesses since they dont have their own pages, if wanted just add 'business' to array
	let articles: Array<{
		type: string,
		slug?: {
			current?: string
		}
	}> = []

	for await (const type of articleTypes) {
		const staticSlugs = await client
			.withConfig({
				token,
				perspective: 'published',
				useCdn: false,
				stega: false,
			})
			.fetch<{ slug?: { current?: string } }[]>(
				groq`*[_type == '${type}' && defined(slug.current)]{slug}`,
				{},
				{
					next: {
						tags: ['article'],
					},
				},
			)
		console.log('Loaded paths for: ', type, '. Paths: ', staticSlugs)
		staticSlugs.forEach((staticPath) => {
			articles.push({ type: type, slug: staticPath.slug })
		})
	}

	return articles.flatMap((article) => {
		return { slug: [article.type, article.slug?.current] }
	})
}