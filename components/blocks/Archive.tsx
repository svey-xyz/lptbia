import { ArchiveBlockType, BusinessPayload, newsData, projectData } from '@/types';
import React from 'react';
import { loadBusinesses, loadNews, loadProjects } from '@/sanity/lib/loadQuery';
import { camelCaseToWords, pluralize } from '@/lib/stringFunctions';
import dynamic from 'next/dynamic'

export const Standard = async ({ data }: { data: ArchiveBlockType }) => {
	if (!data) return

	let ArchiveCard = dynamic(() => import('@/components/cards/archives/Generic'))

	const archiveItems = await (async () => {
		switch (data.archiveType) {
			case ('business'):
				const initialBusinessesPayload = await loadBusinesses()
				ArchiveCard = dynamic(() => import('@/components/cards/archives/Business'))
				if (!initialBusinessesPayload) return []
				return initialBusinessesPayload.data		
			case ('news'):
				const initialNewsPayload = await loadNews()
				if (!initialNewsPayload) return []
				return initialNewsPayload.data		
			case ('project'):
				const initialProjectsPayload = await loadProjects()
				if (!initialProjectsPayload) return []
				return initialProjectsPayload.data		
			default:
				throw new Error('Unknown archive type!')
		}
	})()

	if (!archiveItems) return

	const archiveTitle = `${pluralize(camelCaseToWords(data.archiveType))} Archive`

	return (
		<div className='main-padding my-24 flex flex-col gap-12 items-center'>
			<span className='font-black text-4xl text-accent-secondary'>
				{ archiveTitle }
			</span>
			<div className='relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
				{ archiveItems.map((item) => {
					return (
						<ArchiveCard item={item} key={item._id} />
					)
				}) }
			</div>
		</div>
	);
};

export default Standard;