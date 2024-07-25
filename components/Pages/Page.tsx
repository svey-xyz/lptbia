import dynamic from 'next/dynamic'
import { ArchivePayload, PagePayload } from '@/types';
import { EncodeDataAttributeCallback } from '@sanity/react-loader';
import React from 'react';
import { createDataAttribute } from "@sanity/visual-editing";

interface BlockMap {
	[key: string]: React.ComponentType<{data:any}>
}

interface ContainerMap {
	[key: string]: React.ComponentType<{ children: React.ReactNode, data?:any }>
}

export interface PageProps {
	data: PagePayload | ArchivePayload | null
	encodeDataAttribute?: EncodeDataAttributeCallback
}

const ContainerList: ContainerMap = {
	Standard: dynamic(() => import('@components/blocks/containers/Standard')),
	Video: dynamic(() => import('@components/blocks/containers/Video')),
	Image: dynamic(() => import('@components/blocks/containers/Image')),
}

const BlockList: BlockMap = {
	Standard: dynamic(() => import('@components/blocks/Standard')),
	FeaturedTaxonomies: dynamic(() => import('@components/blocks/FeaturedTaxonomies')),
	Text: dynamic(() => import('@/components/blocks/Text')),
	Map: dynamic(() => import('@components/blocks/Map')),
	Newsletter: dynamic(() => import('@components/blocks/Newsletter')),
	NewsFeature: dynamic(() => import('@components/blocks/NewsFeature')),
	Info: dynamic(() => import('@components/blocks/Info')),
	Archive: dynamic(() => import('@components/blocks/Archive')),
}

export const Page = ({ data, encodeDataAttribute }: PageProps) => {
	if (!data) return;
	return (
		<article className=''>
			{ data.blocks &&
				data.blocks.map((block, i) => {
					// console.log('Block key: ', block)
					const attr = createDataAttribute({
						id: data._id,
						type: data._type,
						path: ['blocks', i, 'containerType']
					});

					const Container = ContainerList[block.containerType] ?? ContainerList.Standard
					const BlockComponent = BlockList[block._type] ?? BlockList.Standard
					return(
						<div data-sanity={attr()}>
							<Container key={block._key} data={block} >
								<BlockComponent data={block} />
							</Container>
						</div>
						
					)
				})

			}
		</article>
	);
};