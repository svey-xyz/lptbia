import React from 'react';
import Image from '@components/site/Image'

import { newsData } from '@/types'
import { readableDate } from '@lib/readableDate';

type args = {
	item: newsData,
	filtered?: boolean,
}

const NewsArchiveCard = async ({ item, filtered = true }:args) => {
	if (!item) return

	return (
		<div className={`${filtered ? 'block' : "hidden"} relative flex flex-col group cursor-pointer`} >
			<div className='relative flex flex-col bg-accent text-bg h-96 w-full'>
				
				{item.image &&
					<Image
					image={item.image}
						size={{width:400, height:400}}
						style={{objectFit: 'cover', width: '100%', height: '100%'}}
					/>
				}

				{/* {news.date &&
					<div className='absolute bg-accent-secondary text-bg py-2 px-4 top-4 left-4'>
						<span className=''>{readableDate(news.date)}</span>
					</div>
				} */}
				
				<div className='absolute bottom-0 px-4 py-2 bg-accent/80 w-full flex flex-row items-end gap-4 border-transparent border-t-2 group-hover:border-accent-secondary group-hover:bg-accent/90'>
					<a href={`/news/${item.title}`} aria-label="Link to news article"
						className='font-bold text-2xl flex-grow leading-none'>
						{item.title}
					</a>
					<span className='text-sm leading-tight text-right'>
						{/* {readableDate(news.date)} */}
					</span>		
				</div>


			</div>
		
			
		</div>
	);
};

export default NewsArchiveCard;