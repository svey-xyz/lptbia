import { loadSettings } from '@/sanity/queries/loadQuery'
import Image from '@components/site/Image'
import Link from 'next/link'
import NavigationItem from '@/components/ui/NavigationItem'
import { Navigation } from '@/components/site/Navigation'

const Header = async() => {
	const initial = await loadSettings()
	if (!initial) return;

	const settings = initial.data;
	
	return (
		<div className="relative h-full flex flex-col items-center justify-center z-50">
			<div className="relative main-padding">
				<div className='relative flex flex-row justify-between gap-4 my-4'>
					<Link href='/' aria-label='Link to the site home.' className='relative z-10'>
						{ settings.logo &&
							<Image image={settings.logo} size={{ width: 165, height: 100, sizes: "(max-width: 244px) 20vw, (max-width: 244px) 20vw, 20vw" }} />
						}
					</Link>
					{ settings.navigation &&
						<Navigation navItems={settings.navigation} />
					}
				</div>
			</div>
		</div>
	)
}

export default Header