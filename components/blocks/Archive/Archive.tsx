import { article, block_Archive } from '@/types';
import React from 'react';
import { loadArticles } from '@/sanity/queries/loadQuery';
import { camelCaseToWords, pluralize } from '@/lib/stringFunctions';
import { Filter } from '@/components/blocks/Archive/Filter';

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

			<Filter articles={archiveItems} archive={data} />
		</div>
	);
};