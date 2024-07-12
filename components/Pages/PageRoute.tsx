import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Page } from '@/components/Pages/Page'
import { loadPage } from '@sanity/lib/loadQuery'
// const PagePreview = dynamic(() => import('@/components/Pages/PagePreview'))

type Props = {
	params: { slug: string }
}

export const PageRoute = async ({ params }: Props) => {
	const initial = await loadPage(params.slug)

	if (!initial.data) {
		notFound()
	}

	// if (draftMode().isEnabled) {
	// 	return <PagePreview params={params} initial={initial} />
	// }

	return <Page data={initial.data} />
}