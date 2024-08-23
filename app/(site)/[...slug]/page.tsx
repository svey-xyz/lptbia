import type { Metadata, ResolvingMetadata } from 'next'
import { loadPage } from '@sanity/lib/loadQuery'
import Pages from '@/components/Pages'

type Props = {
	params: { slug: string }
}

export const generateMetadata = async(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> => {
	const { data: page } = await loadPage(params.slug)

	return {
		title: page?.title,
		// description: page?.overview
		// 	? toPlainText(page.overview)
		// 	: (await parent).description,
	}
}

const Page = ({ params }: Props) => {
	const { slug } = params
	// Trying to import this array from any other file causes a weird error...
	const DocumentTypesWithArchives = ["project", "news", "business"]
	if (DocumentTypesWithArchives.includes(slug[0])) return <Pages.DocumentRoute documentType={slug[0]} slug={slug[1]} />

	return <Pages.PageRoute params={params} />

}

export default Page