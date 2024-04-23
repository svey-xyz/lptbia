import dynamic from 'next/dynamic'
import { PagePayload } from '@/types';
import { EncodeDataAttributeCallback } from '@sanity/react-loader';
import React from 'react';

interface BlockMap {
	[key: string]: React.ComponentType<{data:any}>
}

interface ContainerMap {
	[key: string]: React.ComponentType<{ children: React.ReactNode, data?:any }>
}

export interface PageProps {
	data: PagePayload | null
	encodeDataAttribute?: EncodeDataAttributeCallback
}

const BlockList: BlockMap = {
	Standard: dynamic(() => import('@components/blocks/Standard')),
	FeaturedTaxonomies: dynamic(() => import('@components/blocks/FeaturedTaxonomies')),
	// OtherComponent: dynamic(() => import(`../../components/other-component`))
}

const ContainerList: ContainerMap = {
	Standard: dynamic(() => import('@components/blocks/containers/Standard')),
	Video: dynamic(() => import('@components/blocks/containers/Video')),

}

export const Page = ({ data, encodeDataAttribute }: PageProps) => {
	if (!data) return;
	return (
		<article className=''>
			{ data.blocks &&
				data.blocks.map((block) => {
					const Container = ContainerList[block.containerType] ?? ContainerList.Standard
					const BlockComponent = BlockList[block._type] ?? BlockList.Standard
					return(
						<Container key={block._key} data={block}>
							<BlockComponent data={block} />
						</Container>
					)
				})

			}
		</article>
	);
};