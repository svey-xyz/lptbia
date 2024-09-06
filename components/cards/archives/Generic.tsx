import React from 'react';
import Image from '@components/site/Image'
import Link from 'next/link'

import { BusinessPayload, article, newsData, projectData } from '@/types'
import { slugifyWithOptions } from '@/lib/stringFunctions';

const GenericArchiveCard = ({ item }: { item: article | newsData | projectData | BusinessPayload }) => {
	const itemHref = `/${item._type}/${slugifyWithOptions(item.title)}`
	return (
		<Link href={itemHref} className='relative flex flex-col group cursor-pointer' >
			<div className='relative flex flex-col'>
				<div className='relative min-h-48 max-h-48 overflow-hidden border-b border-accent-secondary border-solid'>
					<div className='absolute flex flex-col items-center justify-center inset-0 bg-accent-secondary -z-1'>
						<span className='text-bg font-semibold text-sm'>
							No {item._type} image.
						</span>
					</div>
					{ item.image &&
						<Image
							image={item.image}
							size={{ width: 400, height: 400 }}
							style={{ objectFit: 'cover', width: '100%', height: '100%' }}
						/>
					}
				</div>
				

				<div className='py-2 bg-bg w-full flex flex-col gap-4'>
					<span className='text-xl text-accent'>
						{item.title}
					</span>
				</div>
			</div>
		</Link>
	);
};

export default GenericArchiveCard;