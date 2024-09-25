import { section } from '@/types';
import React, { ReactNode } from 'react';

export const Standard = ({ data, children, index }: { data?: section, children:ReactNode, index: number}) => {
	const hasHero = data?.blocks ? data.blocks[0]._type == 'Hero' : false
	
	return (
		<div
			className={`relative overflow-hidden flex flex-col justify-center
			${(index == 0 && hasHero) ? '-mt-[--total-header-height]' : ''}`}
		>
			{ children }
		</div>
	);
};

export default Standard
