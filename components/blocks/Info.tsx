'use client'

import { InfoBlockType } from '@/types';
import { Icon } from '@iconify/react';
import React from 'react';
import NumericLabel from 'react-pretty-numbers';

export const Info = ({ data }: { data: InfoBlockType }) => {
	return (
		<div className='relative main-padding flex flex-col items-center py-12 text-accent-secondary gap-12'>
			{ data.title &&
				<span className='font-black text-4xl'>
					{data.title}
				</span>
			}

			<div className='flex flex-row gap-12 flex-wrap '>
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