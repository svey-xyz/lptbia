'use client';

import React from 'react';
import { featuredTaxonomy, type businessTaxonomyData } from '@/types'
import { Icon } from '@iconify/react';
import { breakAdditionSign } from '@lib/stringFunctions'

export const FeaturedTaxonomies = ({ data } : { data: featuredTaxonomy | undefined } ) => {
	if (!data) return;
	return (
		<div className="relative flex-row flex-wrap inline-flex justify-center w-full h-4/6 gap-y-4">
			{data.taxonomies.map((tax, i, arr) => {
				const brightness = 100 - (i * 10)

				return (
					<a
						key={tax._id}
						className='group relative flex flex-col gap-4 flex-grow px-5 pt-4 lg:pb-16 pb-8 text-bg justify-end border-transparent border-t-2 hover:border-accent-secondary'>
						<div className='absolute inset-0 -z-1 bg-accent/75 saturate-150'
							style={{
								WebkitFilter: `brightness(${brightness}%)`,
								filter: `brightness(${brightness}%)`,
							}}/>
						<Icon icon={tax.icon.name} width={60} className='-rotate-12 group-hover:-rotate-6 group-hover:scale-110 transition-transform duration-300'/>
						<span className='text-lg font-bold opacity-80 group-hover:opacity-100 leading-tight' style={{ whiteSpace: "pre-line" }}>
							{ breakAdditionSign(tax.prefLabel) }
						</span>
					</a>
				)
			})}
		</div>
	);
};

export default FeaturedTaxonomies