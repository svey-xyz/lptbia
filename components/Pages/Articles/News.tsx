import React from 'react';
import { article, article_News } from '@/types';
import { notFound } from 'next/navigation'

export interface NewsPageProps {
	data: article_News | article
}

export const News = async ({ data }: NewsPageProps) => {
	if (!data) return notFound();
	if (data._type !== 'news') throw new Error(`Wrong article type - '${data._type}' - passed to News article.)`)

	return (
		<article className=''>
			<h1>{data.title}</h1>
		</article>
	);
};

export default News