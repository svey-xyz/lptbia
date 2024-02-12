import { featuredContent, news } from "@lib/data/data";
import NewsArchiveCard from '@components/site/NewsArchiveCard';
import FeaturedContentCard from '@components/site/FeaturedContentCard'

const News = async ({ params }: { params: { slug: string } }) => {
	const features = featuredContent.news
	return (
		<div className='main-padding flex flex-col'>
			<span className="relative text-6xl font-bold mt-4 mb-6 pb-2 separator">News</span>
			{features &&
				<div className=''>
					<span className="text-sm font-bold">CURRENT</span>
					<div className='px-4 py-2'>
						{features.map((feature) => {
							return <FeaturedContentCard key={feature.featuredContent._id} feature={feature} />
						})}
					</div>
				</div>
			}
			
			<div className="relative flex flex-col">
				<div className="hidden md:flex relative flex-row separator-top pt-2 w-full gap-4">
					<div className='flex flex-grow flex-col md:flex-row gap-x-4'>
						<div className="w-1/6">
							<span className="text-sm font-bold">DATE</span>
						</div>
						<div className="flex-grow">
							<span className="text-sm font-bold">NEWS ITEM</span>
						</div>
					</div>
					<div className="hidden lg:block w-1/4">
						<span className="text-sm font-bold">TYPE</span>
					</div>
				</div>
				{news.map((news) => {
					return <NewsArchiveCard key={news._id} news={news} />
				})}
			</div>
		</div>
	);
};

export default News;