import type { Metadata, ResolvingMetadata } from 'next'
import { loadArticles, loadPage } from '@/sanity/queries/loadQuery'
import Pages from '@/components/Pages'
import { generateStaticSlugs } from '@/lib/server/generateStaticSlugs'

export async function generateStaticParams() {
	const staticSlugs = await generateStaticSlugs('page')
	return staticSlugs
}

type Props = {
	params: { slug: Array<string> }
}

export const generateMetadata = async(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> => {
	const { data: page } = await loadPage(params.slug[0])

	return {
		title: page?.title,
		// description: page?.overview
		// 	? toPlainText(page.overview)
		// 	: (await parent).description,
	}
}

const Page = ({ params }: Props) => {
	return <Pages.PageRoute params={params} />
}

export default Page