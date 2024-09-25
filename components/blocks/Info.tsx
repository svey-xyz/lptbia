'use client'

import { block_Info } from '@/types';
import { Icon } from '@iconify/react';
import React from 'react';
import NumericLabel from 'react-pretty-numbers';

export const Info = ({ data }: { data: block_Info }) => {
	return (
		<div className='relative main-padding flex flex-col items-center py-12 gap-12'>
			{ data.title &&
				<span className='font-black text-4xl'>
					{data.title}
				</span>
			}

			<div className='relative grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(200px,1fr))] auto-rows-auto gap-12 max-w-full w-full'>
				{ data.items?.map((item) => {
					return (
						<div key={item.title} className='flex flex-col items-center'>
							{ item.icon &&
								<div className='rounded-full bg-accent-secondary text-4xl text-bg p-3 mb-2'>
									<Icon icon={item.icon.name} />
								</div>
							}
							{ item.number &&
								<div className='text-4xl p-3 mb-2 font-black'>
									<NumericLabel params={{ wholenumber: true, justification: 'C', shortFormat: true, commafy: true }}>{item.number}</NumericLabel>
								</div>
							}
							<span className='text-xl font-bold'>{item.title}</span>
							<span className='max-w-48 text-center'>{item.subTitle}</span>
						</div>
					)
				}) }
			</div>

		</div>
	);
};

export default Info;