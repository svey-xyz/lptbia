import React from 'react';
import { block_Columns } from '@/types';
import { Blocks } from '@/components/site/Blocks';


const Columns = ({ data, className }: { data: block_Columns | undefined, className?:string }) => {
	if (!data) return;
	return (
		<div className={`${className}`}>
				{ data.blocks &&
				<Blocks blocks={data.blocks} blockClasses='' />
				}
		</div>
	);
};

export default Columns;