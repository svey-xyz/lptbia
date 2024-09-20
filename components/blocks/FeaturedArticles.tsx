import { block_FeaturedArticles, block, article } from '@/types';
import React from 'react';
import dynamic from 'next/dynamic'
import { capitalize } from '@/lib/stringFunctions';

interface CardMap {
	[key: string]: React.ComponentType<{
		article: article,
		filtered?: boolean,
	}>
}

const CardList: CardMap = {
	Standard: dynamic(() => import('@components/site/cards/Generic')),
	business: dynamic(() => import('@components/site/cards/Business')),

}

export const FeaturedArticles = ({ data }: { data: block_FeaturedArticles }) => {
	if (!data) return

	return (
		<div className='main-padding my-24 flex flex-col gap-12 items-center'>
			<span className='font-black text-4xl text-accent-secondary'>
				{ data.title }
			</span>
			<div className='relative flex flex-col lg:flex-row gap-8 items-center lg:items-start lg:justify-center'>
				{	data.articles?.map((article) => {

					const FeaturedCard = CardList[article._type] ?? CardList.Standard

					return <FeaturedCard key={`${data._key}-${article._id}`} article={article} />
				})}
			</div>
		</div>
	);
};

export default FeaturedArticles;