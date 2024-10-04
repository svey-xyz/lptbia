import dynamic from 'next/dynamic'
import { ArchivePayload, PagePayload, section } from '@/types';
import { EncodeDataAttributeCallback } from '@sanity/react-loader';
import React from 'react';
import { createDataAttribute } from "@sanity/visual-editing";
import { Blocks } from '@/components/site/Blocks';

interface ContainerMap {
	[key: string]: React.ComponentType<{ data:section, index: number }>
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

export const Page = ({ data, encodeDataAttribute }: PageProps) => {
	if (!data) return;
	return (
		<article className=''>
			{ data.sections &&
				data.sections.map((section, i) => {
					const Section = ContainerList[section.type] ?? ContainerList.Standard
					const attr = createDataAttribute({
						id: data._id,
						type: data._type,
						path: ['sections', i]
					});

					return (
						<div data-sanity={attr()} key={section._key}>
							<Section data={section} index={i} />
						</div>
					)
				})
			}
		</article>
	);
};