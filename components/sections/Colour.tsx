import { section } from '@/types';
import React, { ReactNode } from 'react';
import { Standard } from './Standard'

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

export const Colour = ({ data, index }: { data: section, index: number }) => {
	const bgColour = BgColourList[data?.colour || 'standard']
	const fgColour = FgColourList[data?.colour || 'standard']

	return (
		<Standard data={ data } index={ index } className={`${bgColour} ${fgColour}`} />
	);
};

export default Colour
