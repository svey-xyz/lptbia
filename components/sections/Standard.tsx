import { section } from '@/types';
import React, { ReactNode } from 'react';


type args = {
	children: React.ReactNode,
	index: number,
	data?: section,
	className?: string,
	style?: React.CSSProperties
}

export const Standard = ({ children, index, data, className, style }: args) => {
	// Add a negative margin to sections at the top of a page with a hero
	const hasHero = data?.blocks ? data.blocks[0]._type == 'Hero' : false

	return (
		<div
			className={`
				section
				${ (data?.columns) && 'grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(200px,1fr))] auto-rows-auto gap-12' }
				${ (index == 0 && hasHero) && '-mt-[--total-header-height]' }
				${ className }
			`}
			style={style}
		>
			{ children }
		</div>
	)
};

export default Standard
