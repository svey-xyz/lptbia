import { featuredContent, settings } from "@/lib/data/data";
import Image from '@components/site/Image'
import VideoBlock from '@components/site/VideoBlock'
import FeaturedTaxonomies from '@components/site/FeaturedTaxonomies';

export default async function Home() {

	return (
		<div>
		<VideoBlock source="https://littleportugaltorontobia.com/wp-content/uploads/2020/01/dundaswest_homevid.mp4">
			<div className="flex flex-col md:flex-row w-full gap-x-4 gap-y-6 justify-between">
				<a href='/' aria-label='Link to the site home.' className='relative z-10'>
					{settings.logo &&
						<Image image={settings.logo} size={{ width: 500, height: 200, sizes: "(max-width: 300px) 40vw, (max-width: 244px) 20vw, 20vw" }} />
					}
				</a>
				{ featuredContent.businessTaxonomies &&
						<FeaturedTaxonomies taxonomies={featuredContent.businessTaxonomies}/>
				}
			</div>
		</VideoBlock>
		</div>
	)
}