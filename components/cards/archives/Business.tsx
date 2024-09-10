import React from 'react';
import Image from '@components/site/Image'
import Link from 'next/link'

import { article_Business, article, article_News, article_Project } from '@/types'
import { slugifyWithOptions } from '@/lib/stringFunctions';

type args = {
	item: article_Business,
	filtered?: boolean,
}

export const BusinessArchiveCard = async({ item, filtered = true }: args) => {
	const itemHref = `/article/${item._type}/${slugifyWithOptions(item._id)}`

	return (
		<Link href={itemHref} className={`${filtered ? 'block' : "hidden"} relative flex flex-col group cursor-pointer`} >
			<div className='relative flex flex-col'>
				<div className='relative min-h-48 max-h-48 overflow-hidden p-4
					after:absolute after:flex after:inset-0 after:bg-accent-secondary after:-z-1'>
					{ (!item.image && !item.content.logo) &&
						<div className='absolute flex flex-col items-center justify-center inset-0'>
							<span className='text-bg font-semibold text-sm'>
								No {item._type} image.
							</span>
						</div>
					}	
					{item.image &&
						<Image
							image={item.image}
							size={{ width: 400, height: 400 }}
							style={{ objectFit: 'cover', width: '100%', height: '100%' }}
						/>
					}
					{(!item.image && item.content.logo) &&
						<Image
						image={item.content.logo}
							size={{ width: 400, height: 400 }}
							style={{ objectFit: 'contain', width: '100%', height: '100%' }}
						/>
					}
				</div>


				<div className='py-2 bg-bg w-full flex flex-col gap-4'>
					<span className='text-xl text-accent text-center'>
						{item.title}
					</span>
				</div>
			</div>
		</Link>
	);
};

export default BusinessArchiveCard;