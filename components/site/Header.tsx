import { settings } from '@lib/data/data'
import { componentParamsType } from '@lib/types'
import ControlPanelWidget from '@components/site/ControlPanelWidget'

export default function Header({ componentParams }: { componentParams: componentParamsType }) {

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

function HeaderWrapper({ children }: { children: React.ReactNode }) {
	return (
		<header className='relative top-0 left-0 right-0 max-w-screen h-fit'>
			{children}
		</header>
	)
}

async function SiteHeader() {
	return (
		<div className="relative h-full flex flex-col items-center justify-center pt-8 md:pt-16 lg:pt-20">
			<div className="relative main-padding">
				<div className='relative separator flex flex-col md:flex-row justify-between pb-4 gap-4'>
					<a href='/' aria-label='Link to the site home.' className='relative z-10 duration-300 transition-opacity hover:opacity-60'>
						<h1>{settings.title}</h1>
					</a>
					<ControlPanelWidget />
				</div>
			</div>
		</div>
	)
}

function PreviewHeader() {
	return (
		<div className="relative h-[--preview-header-height] flex items-center justify-center z-50 bg-fg-primary/20">
			<div className="main-padding m-auto flex flex-row">
				<span className="w-full text-center">
					You&apos;re viewing the site in preview mode! To view published content click <a href="/api/exit-preview" className="underline">here</a>.
				</span>
			</div>
		</div>
	)
}