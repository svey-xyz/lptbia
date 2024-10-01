import { section } from '@/types';
import React, { ReactNode } from 'react';

interface ColourMap {
	[key: string]: string
}


const BgColourList: ColourMap = {
	accent: 'bg-accent',
	standard: 'bg-bg'
}

const FgColourList: ColourMap = {
	accent: 'prose-headings:!text-bg prose:!text-bg text-bg',
	standard: ''
}

export const Colour = ({ data, children, index }: { data?: section, children: ReactNode, index: number }) => {
	const hasHero = data?.blocks ? data.blocks[0]._type == 'Hero' : false
	const bgColour = BgColourList[data?.colour || 'standard']
	const fgColour = FgColourList[data?.colour || 'standard']

	return (
		<div
			className={`section ${bgColour} ${fgColour}
			${(index == 0 && hasHero) ? '-mt-[--total-header-height]' : ''}`}
		>
			{children}
		</div>
	);
};

export default Colour
