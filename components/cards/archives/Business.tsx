import React from 'react';
import Image from '@components/site/Image'
import Link from 'next/link'

import { article_Business, article} from '@/types'
import { slugifyWithOptions } from '@/lib/stringFunctions';

type args = {
	article: article,
	filtered?: boolean,
}

export const BusinessArchiveCard = async ({ article, filtered = true }: args) => {
	if (!article || !article.slug) return []
	
	const itemHref = `/article/${article._type}/${slugifyWithOptions(article.slug)}`

	if (article._type !== 'business') throw new Error(`Wrong article type - '${article._type}' - passed to Business card.)`)
	const business = article as article_Business

	return (
		<Link href={itemHref} className={`${filtered ? 'block' : "hidden"} relative flex flex-col group cursor-pointer`} >
			<div className='relative flex flex-col'>
				<div className='relative min-h-48 max-h-48 overflow-hidden p-4
					after:absolute after:flex after:inset-0 after:bg-accent-secondary after:-z-1'>
					{(!business.image && !business.content.logo) &&
						<div className='absolute flex flex-col items-center justify-center inset-0'>
							<span className='text-bg font-semibold text-sm'>
								No {business._type} image.
							</span>
						</div>
					}	
					{business.image &&
						<Image
							image={business.image}
							size={{ width: 400, height: 400 }}
							style={{ objectFit: 'cover', width: '100%', height: '100%' }}
						/>
					}
					{(!business.image && business.content.logo) &&
						<Image
						image={business.content.logo}
							size={{ width: 400, height: 400 }}
							style={{ objectFit: 'contain', width: '100%', height: '100%' }}
						/>
					}
				</div>


				<div className='py-2 bg-bg w-full flex flex-col gap-4'>
					<span className='text-xl text-accent text-center'>
						{business.title}
					</span>
				</div>
			</div>
		</Link>
	);
};

export default BusinessArchiveCard;