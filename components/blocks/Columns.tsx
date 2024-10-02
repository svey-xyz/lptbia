import React from 'react';
import { block_Columns } from '@/types';
import { Blocks } from '@/components/site/Blocks';


const Columns = ({ data, className }: { data: block_Columns | undefined, className?:string }) => {
	if (!data) return;
	return (
		<div className={`${className} grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(200px,1fr))] auto-rows-auto gap-12 `}>
				{ data.blocks &&
				<Blocks blocks={data.blocks} blockClasses='' />
				}
		</div>
	);
};

export default Columns;