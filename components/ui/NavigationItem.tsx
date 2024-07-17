'use client'

import { ArchivePayload, navigationItem, PagePayload } from '@/types';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import React from 'react';
import Link from 'next/link'

export const NavigationItem = ({ item }: { item: navigationItem }) => {
	const title = item.title
	if (!item.pages) return []

	return (
		<Popover className="group relative z-50">
			<PopoverButton className='font-bold text-bg outline-none'>
				{title}
			</PopoverButton>
			<PopoverPanel anchor="bottom" className="flex flex-col z-50 [--anchor-gap:4px] sm:[--anchor-gap:8px] bg-bg fg-fg gap-2">
				{ item.pages.flatMap((page) => {
					const slug = page._type == 'page' ? `/${(page as PagePayload).slug}` : `/archives/${(page as ArchivePayload)._id}`

					return (
						<Link href={slug} key={page._id} className='px-4 py-2'>
							{page.title}
						</Link>
					)
				})}
			</PopoverPanel>
		</Popover>
	)
};

export default NavigationItem;