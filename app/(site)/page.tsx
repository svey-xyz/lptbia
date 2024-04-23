import { loadPage, loadSettings } from '@/sanity/lib/loadQuery';
import { studioUrl } from '@/sanity/lib/api'
import Link from 'next/link'
import Pages from '@/components/pages';


export default async function Home() {
	const initial = await loadSettings()

	if (!initial || !initial.data.homepage) {
		return (
			<div className="text-center">
				You don&rsquo;t have a homepage yet,{' '}
				<Link href={`${studioUrl}/desk/home`} className="underline">
					create one now
				</Link>
				!
			</div>
		)
	}

	return <Pages.Page data={initial.data.homepage} />
}