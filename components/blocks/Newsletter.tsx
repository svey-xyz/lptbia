import NewsletterForm from '@/components/site/NewsletterForm';
import { block_Newsletter, block } from '@/types';
import React from 'react';

export const Standard = ({ data }: { data: block_Newsletter }) => {
	return (
		<div className="flex flex-col">
			<div className="main-padding py-12 flex flex-col gap-4">
				<span className="text-bg flex flex-col">
					<span className="text-2xl font-semibold">
						Subscribe to our newsletter.
					</span>
					<span>
						Sign up with your email address to receive news and updates.
					</span>
				</span>
				<NewsletterForm stacked={true} className="max-w-prose" />
				<span className="text-bg flex flex-col text-sm">
					We do not share our mailing list.
				</span>
			</div>
		</div>
	);
};

export default Standard;