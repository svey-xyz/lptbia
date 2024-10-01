import dynamic from 'next/dynamic'
import { ArchivePayload, PagePayload } from '@/types';
import { EncodeDataAttributeCallback } from '@sanity/react-loader';
import React from 'react';
import { createDataAttribute } from "@sanity/visual-editing";

interface BlockMap {
	[key: string]: React.ComponentType<{data:any}>
}

interface ContainerMap {
	[key: string]: React.ComponentType<{ children: React.ReactNode, data?:any, index: number }>
}

export interface PageProps {
	data: PagePayload | ArchivePayload | null
	encodeDataAttribute?: EncodeDataAttributeCallback
}

const ContainerList: ContainerMap = {
	Standard: dynamic(() => import('@/components/sections/Standard')),
	Video: dynamic(() => import('@/components/sections/Video')),
	Image: dynamic(() => import('@/components/sections/Image')),
	Colour: dynamic(() => import('@/components/sections/Colour')),

}

const BlockList: BlockMap = {
	Standard: dynamic(() => import('@components/blocks/Standard')),
	FeaturedTaxonomies: dynamic(() => import('@components/blocks/FeaturedTaxonomies')),
	Text: dynamic(() => import('@/components/blocks/Text')),
	Map: dynamic(() => import('@components/blocks/Map')),
	Newsletter: dynamic(() => import('@components/blocks/Newsletter')),
	FeaturedArticles: dynamic(() => import('@/components/blocks/FeaturedArticles')),
	Info: dynamic(() => import('@components/blocks/Info')),
	Archive: dynamic(() => import('@/components/blocks/Archive')),
	Hero: dynamic(() => import('@/components/blocks/Hero')),
	People: dynamic(() => import('@/components/blocks/People')),
}

export const Page = ({ data, encodeDataAttribute }: PageProps) => {
	if (!data) return;
	return (
		<article className=''>
			{ data.sections &&
				data.sections.map((section, i) => {
					const Container = ContainerList[section.type] ?? ContainerList.Standard
					const attr = createDataAttribute({
						id: data._id,
						type: data._type,
						path: ['blocks', i, 'containerType']
					});

					return (
						<div data-sanity={attr()} key={section._key}>
							<Container data={section} index={i} >
								{ section.blocks &&
									section.blocks.map((block, i) => {
										const BlockComponent = BlockList[block._type] ?? BlockList.Standard

										return(
										<BlockComponent data={block} />
										)
									})

								}
							</Container>
						</div>
					)
				})
			}
		</article>
	);
};