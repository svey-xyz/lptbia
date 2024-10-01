'use client'

import { block_Info } from '@/types';
import { Icon } from '@iconify/react';
import React from 'react';
import NumericLabel from 'react-pretty-numbers';

export const Info = ({ data }: { data: block_Info }) => {
	return (
		<div className='relative main-padding flex flex-col py-4 gap-12'>
			{ data.title &&
				<h2 className='font-black text-4xl'>
					{data.title}
				</h2>
			}

			<div className='relative grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(200px,1fr))] auto-rows-auto gap-12 max-w-full w-full'>
				{ data.items?.map((item) => {
					return (
						<div key={item.title} className='flex flex-col'>
							{ item.icon &&
								<div className='rounded-full bg-accent-secondary text-4xl text-bg p-3 mb-2 w-fit'>
									<Icon icon={item.icon.name} />
								</div>
							}
							{ item.number &&
								<div className='text-4xl p-3 mb-2 font-black'>
									<NumericLabel params={{ wholenumber: true, justification: 'L', shortFormat: true, commafy: true }}>
										{item.number}
									</NumericLabel>
								</div>
							}
							<h4 className='text-xl font-bold'>
								{item.title}
							</h4>
							<span className='max-w-48'>
								<em>{item.subTitle}</em>
							</span>
						</div>
					)
				}) }
			</div>

		</div>
	);
};

export default Info;