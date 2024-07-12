import { loadSettings } from '@/sanity/lib/loadQuery'
import Image from '@components/site/Image'

const Header = async() => {
	const initial = await loadSettings()
	if (!initial) return;

	const settings = initial.data;
	
	return (
		<div className="relative h-full flex flex-col items-center justify-center">
			<div className="relative main-padding">
				<div className='relative flex flex-row justify-between gap-4 my-4'>
					<a href='/' aria-label='Link to the site home.' className='relative z-10'>
						{ settings.logo &&
							<Image image={settings.logo} size={{ width: 165, height: 100, sizes: "(max-width: 244px) 20vw, (max-width: 244px) 20vw, 20vw" }} />
						}
					</a>
				</div>
			</div>
		</div>
	)
}

export default Header