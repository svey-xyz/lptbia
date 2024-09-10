import { block_FeaturedArticles, block } from '@/types';
import React from 'react';
import dynamic from 'next/dynamic'


export const Standard = ({ data }: { data: block_FeaturedArticles }) => {
	if (!data) return
	return (
		<div className='main-padding my-24 flex flex-col gap-12 items-center'>
			<span className='font-black text-4xl text-accent-secondary'>
				{ data.title }
			</span>
			<div className='relative flex flex-col lg:flex-row gap-8 items-center lg:items-start lg:justify-center'>
				{	data.articles?.map((article) => {
					let FeaturedCard

					switch (article._type) {
						case ('business'):
							FeaturedCard = dynamic(() => import('@/components/cards/archives/Business'))
							break;
						case ('news'):
							FeaturedCard = dynamic(() => import('@/components/cards/archives/News'))
							break;
						default:
							FeaturedCard = dynamic(() => import('@/components/cards/archives/Generic'))
							break;

					}
					return <FeaturedCard key={`${data._key}-${article._id}`} item={article as any} />
				})}
			</div>
		</div>
	);
};

export default Standard;