import React from 'react';

import { newsData } from '@lib/data/types'
import { readableDate } from '@lib/readableDate';

const NewsArchiveCard = ({news}:{news:newsData}) => {
	return (
		<div className='flex flex-col lg:flex-row gap-x-4'>
			<div className='flex flex-grow flex-col md:flex-row gap-x-4'>
				<div className='relative md:w-1/6 separator-top pt-1 text-center font-bold'>
					<span>{readableDate(news.data.date, "YY-MM-DD")}</span>
				</div>
				<div className='relative flex-grow separator-top pt-1'>
					<a href={`/news/${news.data.slug.current}`} aria-label="Link to news article">
						{news.data.title}
					</a>
				</div>
			</div>
			<div className='relative lg:w-1/4 separator-top pt-2 flex flex-row flex-wrap gap-2'>
				<div>
					{ news.data.tags?.map((tag) => {
						return (
						<span key={tag._id} className='rounded-full border border-solid border-fg px-2 py-1 text-sm'>
							{tag.prefLabel}
						</span>
						)
					})}
				</div>
			</div>
		</div>
	);
};

export default NewsArchiveCard;