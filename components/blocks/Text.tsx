import React from 'react';
// import { featuredContent } from "@lib/data/data";

import Image from '@/components/site/Image'
import { block_Text } from '@/types';
import TextBlock from '@/components/site/TextBlock';
// import urlFor from '@/lib/urlFor';


const Feature = ({ data }: { data: block_Text | undefined }) => {
	if (!data) return;
	return (
		<div className="section-block">
			<div className='relative flex flex-col max-w-prose-full'>
				
				{ data.text &&
					<TextBlock text={data.text} />
				}

				{ data.link &&
					<a
						href={data.link.link}
						aria-label={`Link to: ${data.link.text}`}
						className='relative w-fit px-8 py-2 text-base text-bg mt-4 z-10
						after:bg-accent after:absolute after:inset-0 after:rounded-full after:-z-1 after:hover:brightness-75 after:transition-all after:duration-300'>
						{data.link.text}
					</a>
				}
			</div>
		</div>
	);
};

export default Feature;