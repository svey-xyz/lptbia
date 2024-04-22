import NewsArchiveCard from '@/components/site/NewsArchiveCard';
import { newsData } from '@/types';
import React from 'react';

const FeaturedNews = ({news}:{news:Array<newsData>}) => {
	return (
		<div className='main-padding my-24 flex flex-col gap-12 items-center'>
			<span className='font-black text-4xl text-accent-secondary'>
				News & Updates
			</span>
			<div className='relative flex flex-col lg:flex-row gap-8 items-center lg:items-start lg:justify-center'>
				{news.map((news) => {
					return <NewsArchiveCard key={news._id} news={news} />
				})}
			</div>
		</div>
		
	);
};

export default FeaturedNews;