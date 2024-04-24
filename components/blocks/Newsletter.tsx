import NewsletterForm from '@/components/site/NewsletterForm';
import { NewsletterBlockType, block } from '@/types';
import React from 'react';

export const Standard = ({ data }: { data: NewsletterBlockType }) => {
	return (
		<div className="flex flex-col bg-accent">
			<div className="main-padding py-12 flex flex-col gap-4 justify-center text-center">
				<span className="text-bg flex flex-col justify-center text-center">
					<span className="text-2xl font-semibold">
						Subscribe to our newsletter.
					</span>
					<span>
						Sign up with your email address to receive news and updates.
					</span>
				</span>
				<NewsletterForm stacked={true} className="mx-auto max-w-prose" />
				<span className="text-bg flex flex-col text-sm justify-center text-center">
					We do not share our mailing list.
				</span>
			</div>
		</div>
	);
};

export default Standard;