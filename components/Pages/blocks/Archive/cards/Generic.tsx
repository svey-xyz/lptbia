import React from 'react';
import Image from '@components/site/Image'

import { article } from '@/types'
import { resolveArticleHref } from '@/lib/resolveHref';

type args = {
	article: article,
	filtered?: boolean,
}

export const GenericArchiveCard = async ({ article, filtered = true }: args) => {

	return (
		<a href={resolveArticleHref(article) || ''} className={`${filtered ? 'block' : "hidden"} relative flex flex-col group cursor-pointer`} >
			<div className='relative flex flex-col'>
				<div className='relative min-h-48 max-h-48 overflow-hidden border-b border-accent-secondary border-solid'>
					<div className='absolute flex flex-col items-center justify-center inset-0 bg-accent-secondary -z-1'>
						<span className='text-bg font-semibold text-sm'>
							No {article._type} image.
						</span>
					</div>
					{article.image &&
						<Image
						image={article.image}
							size={{ width: 400, height: 400 }}
							style={{ objectFit: 'cover', width: '100%', height: '100%' }}
						/>
					}
				</div>
				

				<div className='py-2 bg-bg w-full flex flex-col gap-4'>
					<span className='text-xl text-accent'>
						{article.title}
					</span>
				</div>
			</div>
		</a>
	);
};

export default GenericArchiveCard;