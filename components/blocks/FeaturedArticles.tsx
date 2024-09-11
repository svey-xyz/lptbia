import { block_FeaturedArticles, block } from '@/types';
import React from 'react';
import dynamic from 'next/dynamic'
import { capitalize } from '@/lib/stringFunctions';


export const FeaturedArticles = ({ data }: { data: block_FeaturedArticles }) => {
	if (!data) return
	return (
		<div className='main-padding my-24 flex flex-col gap-12 items-center'>
			<span className='font-black text-4xl text-accent-secondary'>
				{ data.title }
			</span>
			<div className='relative flex flex-col lg:flex-row gap-8 items-center lg:items-start lg:justify-center'>
				{	data.articles?.map((article) => {
					let FeaturedCard

					try {
						FeaturedCard = dynamic(() => import(`@/components/cards/archives/${capitalize(article._type)}`))
					} catch (e) {
						FeaturedCard = dynamic(() => import(`@/components/cards/archives/Generic`))
					}

					return <FeaturedCard key={`${data._key}-${article._id}`} article={article} />
				})}
			</div>
		</div>
	);
};

export default FeaturedArticles;