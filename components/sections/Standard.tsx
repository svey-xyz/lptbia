import { Blocks } from '@/components/site/Blocks';
import { section } from '@/types';
import React, { ReactNode } from 'react';


type args = {
	index: number,
	data: section,
	className?: string,
	style?: React.CSSProperties
	children?: React.ReactNode
}

export const Standard = ({ index, data, className, style, children }: args) => {
	// Add a negative margin to sections at the top of a page with a hero
	const hasHero = data?.blocks ? data.blocks[0]._type == 'Hero' : false
	return (
		<div
			className={`
				section
				${ (index == 0 && hasHero) && '-mt-[--total-header-height]' }
				${ className }
			`}
			style={style}
		>
			{ children }
			<div className={`relative main-padding flex flex-col h-full w-full z-10 gap-12 justify-center
				${ (data.columns) && 'md:flex-wrap md:!flex-row' }`}>

				{ data.blocks &&
					<Blocks blocks={data?.blocks} blockClasses={`section-block`}/>
				}
			</div>
			{/* { children } */}
			
		</div>
	)
};

export default Standard
