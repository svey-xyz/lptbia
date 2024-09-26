import { block_Directors } from '@/types';
import React from 'react';

export const Directors = ({ data }: { data: block_Directors }) => {
	return (
		<div className='relative main-padding flex flex-col items-center py-12 gap-12'>
			<div className='relative grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(200px,1fr))] auto-rows-auto gap-12 max-w-full w-full'>
				{data.directors?.map((director) => {
					return (
						<div key={director._id} className='flex flex-col items-center'>
							{director.name }
						</div>
					)
				})}
			</div>

		</div>
	);
};

export default Directors;