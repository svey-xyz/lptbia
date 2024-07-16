import { notFound } from 'next/navigation'

import { Page } from '@/components/Pages/Page'
import { loadPage } from '@sanity/lib/loadQuery'

type Props = {
	params: { slug: string }
}

export const PageRoute = async ({ params }: Props) => {
	const initial = await loadPage(params.slug)

	if (!initial.data) {
		notFound()
	}

	return <Page data={initial.data} />
}