import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import { loadBusiness, loadNews, loadNewsSingle, loadProject } from '@/sanity/lib/loadQuery'

type DocumentPageProps = {
	documentType: string,
	slug: string
}

export const DocumentRoute = async ({ documentType, slug }: DocumentPageProps) => {
	switch (documentType) {
		case ('project'):
			const ProjectPage = dynamic(() => import('@components/Pages/Documents/Project').then(Loader => Loader.Project))
			const ProjectPayload = await loadProject(slug)

			return <ProjectPage data={ProjectPayload.data} />
		case ('business'):
			const BusinessPage = dynamic(() => import('@components/Pages/Documents/Business').then(Loader => Loader.Business))
			const BusinessPayload = await loadBusiness(slug)

			return <BusinessPage data={BusinessPayload.data} />
		case ('news'):
			const NewsPage = dynamic(() => import('@components/Pages/Documents/News').then(Loader => Loader.News))
			const NewsPayload = await loadNewsSingle(slug)

			return <NewsPage data={NewsPayload.data} />
		default:
			return notFound()
	}
}