import { featuredContent, settings } from "@/lib/data/data";
import Image from '@components/site/Image'
import VideoBlock from '@components/site/VideoBlock'
import FeaturedTaxonomies from '@components/site/FeaturedTaxonomies';
import Feature from '@components/site/Feature'
import NewsletterForm from '@components/site/NewsletterForm'
import ParallaxBackground from '@components/site/ParallaxBackground'

export default async function Home() {

	return (
		<div>
			<VideoBlock source={featuredContent.video || ''}>
				{ featuredContent.businessTaxonomies &&
					<FeaturedTaxonomies taxonomies={featuredContent.businessTaxonomies} />
				}
			</VideoBlock>
			{ featuredContent.frontpageFeature &&
			<ParallaxBackground image={featuredContent.heroImages![1]}>
					<Feature feature={featuredContent.frontpageFeature} />
			</ParallaxBackground>
			}
			<div className="flex flex-col bg-accent">
				<div className="main-padding py-12 flex flex-col gap-4 justify-center text-center">
					<span className="text-bg flex flex-col justify-center text-center">
						<span className="text-2xl font-semibold">
							Subscribe to our newsletter.
						</span>
						<span>
							Sign up with your email address to receive news and updates.
						</span>
					</span>
					<NewsletterForm stacked={true} className="mx-auto max-w-prose"/>
					<span className="text-bg flex flex-col text-sm justify-center text-center">
						We do not share our mailing list.
					</span>
				</div>
			</div>
			<div className="main-padding">
				<div className="max-w-prose-short text-accent flex flex-col py-12 gap-4">
					<span className="text-4xl font-bold">
						Welcome to {settings.title}
					</span>
					{settings.blurb &&
						<span className="font-bold">
							{settings.blurb}
						</span>
					}
				</div>
				
			</div>
		</div>
	)
}