import React from 'react';
import { article } from '@/types';
import { notFound } from 'next/navigation'

export interface GenericArticlePageProps {
	data: article
}

export const Generic = async ({ data }: GenericArticlePageProps) => {
	if (!data) return notFound();
	return (
		<article className=''>
			<h1>{data.title}</h1>
		</article>
	);
};

export default Generic