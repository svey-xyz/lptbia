import { readableDate } from '@/lib/readableDate';
import TextBlock from '@components/site/TextBlock';
import { singleNews } from '@lib/data/data';
import React from 'react';
import ImageBuilder from '@/lib/ImageBuilder';

const NewsPage = async({ params }: { params: { slug: string } }) => {
	const news = await singleNews(params);
	if (!news) return;

	return (
		<div className='relative main-padding'>
			<h1 className='relative py-8'>
				{ news.data.title }
			</h1>
			<div className='max-w-prose'>
				<div className="relative separator separator-top flex flex-col md:flex-row py-4 justify-between z-10">
					<span>{readableDate(news.data.date, "LL")}</span>
					<span>{news.author}</span>
				</div>
				{ news.data.image && 

						<ImageBuilder className='w-auto h-[400px] mx-4 mt-6 object-left max-h-[80vh] placeholder:opacity-40
							lg:absolute lg:m-0 lg:right-0 lg:top-0 lg:object-right lg:pr-32 lg:pt-6 lg:-z-1'
							image={news.data.image}
							sizes="(max-height: 480px) 100vw, (max-width: 1200px) 80vw, 50vw"
							width={1200}
							height={1200}
							loading="lazy"
						/>

				}
				<div className='max-w-prose-short pt-4 mx-4 md:mx-6 lg:min-h-[250px]'>
					<TextBlock text={news.content} />
				</div>
			</div>
		</div>
	);
};

export default NewsPage;