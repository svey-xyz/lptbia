import dynamic from 'next/dynamic'
import { PagePayload } from '@/types';
import { EncodeDataAttributeCallback } from '@sanity/react-loader';
import React from 'react';
import Standard from '@components/blocks/containers/Standard';

interface BlockMap {
	[key: string]: React.ComponentType<{data:any}>
}

interface ContainerMap {
	[key: string]: React.ComponentType<{ children: React.ReactNode }>
}

export interface PageProps {
	data: PagePayload | null
	encodeDataAttribute?: EncodeDataAttributeCallback
}

const BlockList: BlockMap = {
	FeaturedTaxonomies: dynamic(() => import('@components/blocks/FeaturedTaxonomies'))
	// OtherComponent: dynamic(() => import(`../../components/other-component`))
}

const ContainerList: ContainerMap = {
	Standard: dynamic(() => import('@components/blocks/containers/Standard'))
}

export const Page = ({ data, encodeDataAttribute }: PageProps) => {
	if (!data) return;
	return (
		<article className=''>
			{ data.blocks &&
				data.blocks.map((block) => {
					const Container = ContainerList[block.containerType]
					const BlockComponent = BlockList[block._type]
					return(
						<Container key={block._key}>
							<BlockComponent data={block} />
						</Container>
					)
				})

			}
		</article>
	);
};