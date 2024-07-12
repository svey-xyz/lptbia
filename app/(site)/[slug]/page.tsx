import type { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'

import { loadPage } from '@sanity/lib/loadQuery'
import Pages from '@/components/Pages'

type Props = {
	params: { slug: string }
}

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata,
): Promise<Metadata> {
	const { data: page } = await loadPage(params.slug)

	return {
		title: page?.title,
		// description: page?.overview
		// 	? toPlainText(page.overview)
		// 	: (await parent).description,
	}
}

export const PageSlugRoute = ({ params }: Props) => {
	return <Pages.PageRoute params={params} />
}

export default PageSlugRoute