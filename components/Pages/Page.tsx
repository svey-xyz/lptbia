import dynamic from 'next/dynamic'
import { ArchivePayload, PagePayload } from '@/types';
import { EncodeDataAttributeCallback } from '@sanity/react-loader';
import React from 'react';
import { createDataAttribute } from "@sanity/visual-editing";
import { Blocks } from '@/components/site/Blocks';

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
									<Blocks blocks={section.blocks} blockClasses='section-block' />
								}
							</Container>
						</div>
					)
				})
			}
		</article>
	);
};