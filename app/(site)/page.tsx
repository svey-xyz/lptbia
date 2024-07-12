import { loadSettings } from '@/sanity/lib/loadQuery';
import Pages from '@/components/Pages';

export default async function Home() {
	const initial = await loadSettings()

	if (!initial || !initial.data.homepage) {
		return (
			<div className="text-center">
				You don&rsquo;t have a homepage yet
			</div>
		)
	}

	

	return <Pages.PageRoute params={{ slug: initial.data.homepage.slug }} />
}