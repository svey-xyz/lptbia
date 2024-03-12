import { featuredContent, settings } from "@/lib/data/data";
import Image from '@components/site/Image'
import VideoBlock from '@components/site/VideoBlock'
import FeaturedTaxonomies from '@components/site/FeaturedTaxonomies';
import Feature from '@components/site/Feature'

export default async function Home() {

	return (
		<div>
			<VideoBlock source={featuredContent.video || ''}>
				<div className="flex flex-row w-full gap-x-8 gap-y-12 justify-between items-center flex-wrap">
					<a href='/' aria-label='Link to the site home.' className='relative z-10'>
						{settings.logo &&
							<Image image={settings.logo} size={{ width: 450, height: 200, sizes: "(max-width: 800px) 40vw, (max-width: 800px) 20vw, 20vw" }} />
						}
					</a>
					{ featuredContent.businessTaxonomies &&
						<FeaturedTaxonomies taxonomies={featuredContent.businessTaxonomies}/>
					}
				</div>
			</VideoBlock>
			{ featuredContent.frontpageFeature &&
				<Feature feature={featuredContent.frontpageFeature}/>
			}

		</div>
	)
}