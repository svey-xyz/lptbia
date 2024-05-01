'use client'

import { InfoBlockType } from '@/types';
import { Icon } from '@iconify/react';
import React from 'react';

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
						<div className='flex flex-col items-center'>
							{ item.icon &&
								<div className='rounded-full bg-accent-secondary text-4xl text-bg p-3 mb-2'>
									<Icon icon={item.icon.name} />
								</div>
							}
							{ item.number &&
								<div className='text-4xl p-3 mb-2 font-black'>
									{ item.number }
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