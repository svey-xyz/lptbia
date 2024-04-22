import dynamic from 'next/dynamic'
import { PagePayload } from '@/types';
import { EncodeDataAttributeCallback } from '@sanity/react-loader';
import React from 'react';

export interface PageProps {
	data: PagePayload | null
	encodeDataAttribute?: EncodeDataAttributeCallback
}

const BlockList = {
	FeaturedTaxonomies: dynamic(() => import('@components/blocks/FeaturedTaxonomies'))
	// OtherComponent: dynamic(() => import(`../../components/other-component`))
}

const getDynamicComponent = (c: string) => dynamic(() => import(`@components/blocks/${c}`), {
	ssr: true,
	loading: () => <p>Loading...</p>,
});

export const Page = ({ data, encodeDataAttribute }: PageProps) => {
	if (!data) return;
	return (
		<div className='main-padding'>
			{ data.blocks &&
				data.blocks.map((block) => {
					const BlockComponent = BlockList[block._type]
					return <BlockComponent data={block} />
				})

			}
		</div>
	);
};