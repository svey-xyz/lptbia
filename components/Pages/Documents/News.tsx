import React from 'react';
import { newsData } from '@/types';
import { notFound } from 'next/navigation'

export interface NewsPageProps {
	data: newsData
}

export const News = ({ data }: NewsPageProps) => {
	if (!data) return notFound();
	return (
		<article className=''>
			<h1>{data.title}</h1>
		</article>
	);
};