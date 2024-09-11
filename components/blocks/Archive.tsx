import { article, block_Archive } from '@/types';
import React from 'react';
import { loadArticles } from '@/sanity/queries/loadQuery';
import { camelCaseToWords, pluralize } from '@/lib/stringFunctions';
import { ArchiveFilter } from '@/components/site/ArchiveFilter';

export const Archive = async ({ data }: { data: block_Archive }) => {
	if (!data) return

	const initialPayload = await loadArticles<article>(data.archiveType)
	if (!initialPayload) return []
	
	const archiveItems = initialPayload.data

	const archiveTitle = `${pluralize(camelCaseToWords(data.archiveType))} Archive`

	return (
		<div className='main-padding my-24 flex flex-col gap-12 items-center'>
			<span className='font-black text-4xl text-accent-secondary'>
				{ archiveTitle }
			</span>

			<ArchiveFilter articles={archiveItems} archive={data} />
			{/* <div className='relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
				{ archiveItems.map((item) => {
					return (
						<ArchiveCard item={item} key={item._id} />
					)
				}) }
			</div> */}
		</div>
	);
};

export default Archive;