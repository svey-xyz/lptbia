import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import { capitalize } from '@/lib/stringFunctions'
import { load_singleArticle } from '@/sanity/queries/loadQuery'

type ArticleRouteProps = {
	type: string,
	slug: string
}

export const ArticleRoute = async ({ type, slug }: ArticleRouteProps) => {
	let ArticlePage

	try {
		const articlePayload = await load_singleArticle(type, slug)
		
		ArticlePage = dynamic(() => import(`@/components/Pages/Articles/${capitalize(type)}`).then(Loader => Loader[capitalize(type)])) as any
		
		return <ArticlePage data={articlePayload} />
	} catch (e) {
		return notFound()
	}
}