'use client'

import { ArchivePayload, object_NavigationItem, PagePayload } from '@/types';
import { Popover, PopoverButton, PopoverPanel, CloseButton } from '@headlessui/react';
import React from 'react';
import Link from 'next/link'
import { resolvePageHref } from '@/lib/resolveHref';

type NavigationItemParams = {
	item: object_NavigationItem,
}

export const NavigationItem = ({ item }: NavigationItemParams) => {
	const title = item.title

	if (!item.pages) return []
	if (item.pages.length > 1) return PopoverNavigation({title, pages: item.pages})
	return StaticNavigation({title, page: item.pages[0]})

};

export default NavigationItem;

type NavigationTitleParams = {
	title: string,
}

const NavigationTitle = ({ title }: NavigationTitleParams) => {
	return (
		<span className='font-bold text-bg bg-accent-secondary/60 outline-none px-4 py-1 group-hover:bg-accent-secondary/80 transition-colors duration-200'>
			{title}
		</span>
	)
}

type StaticNavigationParams = {
	title: string,
	page: PagePayload | ArchivePayload,
}

const StaticNavigation = ({ title, page }: StaticNavigationParams) => {
 return (
	 <Link href={resolvePageHref(page)}>
		 <NavigationTitle title={title} />
	</Link>
 )
}

type PopoverParams = {
	title: string,
	pages: ArchivePayload[] | PagePayload[],
}

const PopoverNavigation = ({ title, pages }: PopoverParams) => {

	return (
	<Popover className="group relative z-50">
		<PopoverButton>
			<NavigationTitle title={title} />
		</PopoverButton>
		<PopoverPanel anchor="bottom" className="flex flex-col z-50 [--anchor-gap:4px] sm:[--anchor-gap:8px] bg-bg fg-fg gap-2">
			{({ close }) => {
				const items = pages.flatMap((page) => {
					return (
						<Link href={resolvePageHref(page)} key={page._id} className='px-4 py-2 text-sm font-bold text-accent-secondary hover:underline' onClick={() => { close() }}>
							{page.title}
						</Link>
					)
				})
				return (
					<>
						{items}
					</>
				)
			}

			}
			{/* { } */}
		</PopoverPanel>
	</Popover>
	)
}