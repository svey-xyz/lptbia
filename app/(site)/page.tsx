import { featuredContent, settings } from "@/lib/data/data";
import Image from '@components/site/Image'
import VideoBlock from '@components/site/VideoBlock'
import FeaturedTaxonomies from '@components/site/FeaturedTaxonomies';
import Feature from '@components/site/Feature'
import NewsletterForm from '@components/site/NewsletterForm'


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
			<div className="flex flex-col bg-accent">
				<div className="main-padding py-12 flex flex-col gap-4">
					<span className="text-bg flex flex-col items-center text-center">
						<span className="text-2xl font-semibold">
							Subscribe to our newsletter.
						</span>
						<span>
							Sign up with your email address to receive news and updates.
						</span>
					</span>
					<NewsletterForm stacked={true} className="px-0 md:px-20 lg:px-24"/>
					<span className="text-bg flex flex-col items-center text-center">
						We do not share our mailing list.
					</span>
				</div>
			</div>
		</div>
	)
}