import urlFor from '@/lib/urlFor';
import { section, sanityImage } from '@/types';
import React, { ReactNode } from 'react';

export const Image = ({ children, index, data }: { children: ReactNode, index: number, data?: section }) => {
	const BG_URL = data?.image ? urlFor(data?.image).url() : ''
	return (
		<div
			className={`section
			bg-fixed bg-no-repeat bg-cover bg-center text-accent ${index == 0 ? '-mt-[--total-header-height]' : ''}
			after:absolute after:inset-0 after:bg-bg/30 after:backdrop-blur-sm`}
			style={{
				backgroundImage: `url(${BG_URL})`
			}}>
				{children}
		</div>
	);
};

export default Image;