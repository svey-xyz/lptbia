import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
// import { loadBusiness, loadNews, loadNewsSingle, loadProject } from '@/sanity/queries/loadQuery'
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

	// switch (documentType) {
	// 	case ('project'):
	// 		const ProjectPage = dynamic(() => import('@/components/Pages/Articles/Project').then(Loader => Loader.Project))
	// 		const ProjectPayload = await loadProject(slug)

	// 		return <ProjectPage data={ProjectPayload.data} />
	// 	case ('business'):
	// 		const BusinessPage = dynamic(() => import('@/components/Pages/Articles/Business').then(Loader => Loader.Business))
	// 		const BusinessPayload = await loadBusiness(slug)

	// 		return <BusinessPage data={BusinessPayload.data} />
	// 	case ('news'):
	// 		const NewsPage = dynamic(() => import('@/components/Pages/Articles/News').then(Loader => Loader.News))
	// 		const NewsPayload = await loadNewsSingle(slug)

	// 		return <NewsPage data={NewsPayload.data} />
	// 	default:
	// 		return notFound()
	// }
}