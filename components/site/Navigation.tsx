import React from 'react'

const links: Array<{title: string, url: string}> = [
	{ title: 'Projects', url: '/projects' },
	{ title: 'News', url: '/news' },
	{ title: 'About LPT bIA', url: '/about' },
]

function Navigation() {
	return (
		<div className="relative main-padding gap-2 mt-6">
			<span className="uppercase mt-2 font-normal mb-2">Navigation</span>
			<div className='relative separator flex flex-col gap-y-2 pb-4 md:flex-row flex-wrap gap-x-6'>
				{( links && 
					links.map((link) => {
						return (
							<a key={link.title} href={link.url} aria-label={`Primary navigation link to: ${link.title}`}
								className='inline-flex text-5xl font-bold leading-none tracking-tighter text hover:opacity-60'>
								{link.title}
							</a>
						)
					})
				)}
			</div>
		</div>
	)
}

export default Navigation