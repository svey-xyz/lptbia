import React from 'react';
import { article_News } from '@/types';
import { notFound } from 'next/navigation'

export interface NewsPageProps {
	data: article_News
}

export const News = ({ data }: NewsPageProps) => {
	if (!data) return notFound();
	return (
		<article className=''>
			<h1>{data.title}</h1>
		</article>
	);
};