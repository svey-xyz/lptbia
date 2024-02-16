import TextBlock from "@components/site/TextBlock";
import FeaturedContentCard from "@components/site/FeaturedContentCard"
import { PortableTextBlock } from "sanity";
import { featuredContent, settings } from "@lib/data/data";

/** Metadata defined in layout for top route page */
export default async function Home() {
	const features = featuredContent?.frontpageContent

	// const client = getClient(preview)
	const featuredText: PortableTextBlock | undefined = featuredContent?.frontpageText?.textContent ?? settings.landAcknowledgement
	const featuredLink: string = featuredContent?.frontpageText?.link ?? '/this-land'

	return (
		<div className="relative flex flex-col main-padding">
			{ featuredText &&
				<a href={featuredLink} aria-label={`Link to featured content.`}
					className="relative text-fg-primary mt-4 text-base pb-4 separator">
					<TextBlock text={featuredText} />
				</a>
			}
			
			<h2 className="uppercase mt-2 font-normal">What's Happening</h2>
			<div className="relative flex flex-col md:flex-row justify-between gap-6 mt-4">
				{features &&
					features.map((feature) => {
						return <FeaturedContentCard key={feature.featuredContent._id} feature={feature} />
					})
				}
			</div>
		</div>
	)
}