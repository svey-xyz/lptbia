import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'
import { loadProject } from '@/sanity/lib/loadQuery'

type DocumentPageProps = {
	documentType: string,
	slug: string
}

export const DocumentRoute = async ({ documentType, slug }: DocumentPageProps) => {
	let ArchiveCard = dynamic(() => import('@/components/cards/GenericArchiveCard'))
	switch (documentType) {
		case ('project'):
			console.log('Type check success')
			const ProjectPage = dynamic(() => import('@components/Pages/Documents/Project').then(Loader => Loader.Project))
			const projectPayload = await loadProject(slug)
			console.log(projectPayload)
			return <ProjectPage data={projectPayload.data} />
		case ('business'):
			return
		case ('news'):
			return
		default:
			return
	}
}