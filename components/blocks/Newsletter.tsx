import NewsletterForm from '@/components/site/NewsletterForm';
import { block_Newsletter, block } from '@/types';
import React from 'react';

export const Standard = ({ data }: { data: block_Newsletter }) => {
	return (
		<div className="section-block">
			<h3>
				Subscribe to our newsletter.
			</h3>
			<span>
				Sign up with your email address to receive news and updates.
			</span>
			<NewsletterForm stacked={true} className="max-w-prose" />
			<span>
				We do not share our mailing list.
			</span>
		</div>
	);
};

export default Standard;