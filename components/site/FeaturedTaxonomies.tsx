'use client';

import React from 'react';
import { type businessTaxonomyData } from '../../lib/data/types'
import { Icon } from '@iconify/react';

const FeaturedTaxonomies = ({ taxonomies } : { taxonomies: Array<businessTaxonomyData> }) => {
	return (
		<div className="relative flex flex-row flex-wrap h-auto">
			{taxonomies.map((tax, i, arr) => {
				const brightness = 100 - (i * 10)

				return (
					<a
						key={tax._id}
						className='relative flex flex-col gap-2 w-28 px-6 py-4 text-bg justify-center h-32 border-accent-secondary border-t-2'>
						<div className='absolute inset-0 -z-1 bg-accent'
							style={{
								WebkitFilter: `brightness(${brightness}%)`,
								filter: `brightness(${brightness}%)`,
							}}/>
						<Icon icon={tax.icon.name} width={32} className=''/>
						<span className='text-sm font-bold'>
							{ tax.prefLabel }
						</span>
					</a>
				)
			})}
		</div>
	);
};

export default FeaturedTaxonomies;