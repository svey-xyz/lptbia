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
	return (
		<div
			className={`section ${ className }`}
			style={style}
		>
			{ children }
			<div className={`relative main-padding flex flex-col h-full w-full z-10 gap-12 justify-center
				${ (data.columns) && 'md:flex-wrap md:!flex-row' }`}>

				{ data.blocks &&
					<Blocks blocks={data?.blocks} blockClasses={`section-block`}/>
				}
			</div>
		</div>
	)
};

export default Standard
