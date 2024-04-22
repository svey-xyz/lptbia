import type { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { toPlainText } from 'next-sanity'

import Pages from '@components/pages'
import { loadPage } from '@sanity/lib/loadQuery'
// const PagePreview = dynamic(() => import('@/components/pages/page/PagePreview'))

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

export default async function PageSlugRoute({ params }: Props) {
	const initial = await loadPage(params.slug)

	// if (draftMode().isEnabled) {
	// 	return <PagePreview params={params} initial={initial} />
	// }

	if (!initial.data) {
		notFound()
	}

	return <Pages.Page data={initial.data} />
}