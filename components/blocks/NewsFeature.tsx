import NewsArchiveCard from '@/components/cards/archives/News';
import { block_FeaturedArticles, block } from '@/types';
import React from 'react';

export const Standard = ({ data }: { data: block_FeaturedArticles }) => {
	if (!data) return
	return (
		<div className='main-padding my-24 flex flex-col gap-12 items-center'>
			<span className='font-black text-4xl text-accent-secondary'>
				News & Updates
			</span>
			<div className='relative flex flex-col lg:flex-row gap-8 items-center lg:items-start lg:justify-center'>
				{	data.news?.map((news) => {
					return <NewsArchiveCard key={news._id} item={news} />
				})}
			</div>
		</div>
	);
};

export default Standard;