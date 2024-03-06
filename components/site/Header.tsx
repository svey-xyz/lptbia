import { settings } from '@lib/data/data'
import Image from '@components/site/Image'

const Header = ({ componentParams }: { componentParams: any }) => {
	return (
		<HeaderWrapper>
			{(componentParams.preview && componentParams.preview.token) ? (
				<>
					<PreviewHeader />
					<SiteHeader  />
				</>
			) : (
					<SiteHeader />
			)}
		</HeaderWrapper>
	)
}

const HeaderWrapper = ({ children }: { children: React.ReactNode }) => {
	return (
		<header className='fixed top-0 left-0 right-0 max-w-screen h-fit z-50'>
			{children}
		</header>
	)
}

const SiteHeader = () => {
	return (
		<div className="relative h-full flex flex-col items-center justify-center bg-bg shadow-md">
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

const PreviewHeader = () => {
	return (
		<div className="relative h-[--preview-header-height] flex items-center justify-center z-50 bg-accent">
			<div className="main-padding m-auto flex flex-row">
				<span className="w-full text-center text-bg">
					You&apos;re viewing the site in preview mode! To view published content click <a href="/api/exit-preview" className="underline">here</a>.
				</span>
			</div>
		</div>
	)
}

export default Header