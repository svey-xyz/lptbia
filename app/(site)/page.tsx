import { loadSettings } from '@/sanity/lib/loadQuery';
import { studioUrl } from '@/sanity/lib/api'
import Link from 'next/link'
import HomePage from '@/components/pages/Homepage';


export default async function Home() {
	const initial = await loadSettings()

	console.log(initial)

	if (!initial) {
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

	return <HomePage data={initial.data} />
}