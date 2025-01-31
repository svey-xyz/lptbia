import NewsletterForm from '@/components/site/NewsletterForm';
import { block_Newsletter, block } from '@/types';
import React from 'react';

export const Standard = ({ data, className }: { data: block_Newsletter, className?: string }) => {
	return (
		<div className={`${className} w-prose-full max-w-full`}>
			<h3>
				{ data.callToAction }
			</h3>
			<span>
				{ data.text }
			</span>
			<NewsletterForm stacked={true} className="w-full max-w-prose mx-auto" uuid={`${data._key}`} audienceID={data.audienceID} />
		</div>
	);
};

export default Standard;