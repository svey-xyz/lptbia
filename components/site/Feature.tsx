import React from 'react';
import { featuredContent } from "@/lib/data/data";

import Image from './Image'
import { frontpageFeature } from '@/types';
import TextBlock from '@/components/site/TextBlock';
import urlFor from '@/lib/urlFor';


const Feature = ({feature}:{feature:frontpageFeature}) => {
	return (
		<div className="relative overflow-hidden flex flex-col justify-center items-center py-16 gap-12">
			<span className='font-black text-4xl'>
				{ feature.title }
			</span>
			<div className="relative flex main-padding md:items-center flex-col md:flex-row gap-12 justify-center">

				<Image
					image={feature.image}
					size={{
						width: 1200, height: 1200,
						sizes: "(max-width: 1200px) 60vw, (max-width: 1200px) 50vw, 50vw",
					}}
					className='h-auto w-96 shadow-xl rotate-3'
				/>

				<div className='relative flex flex-col font-semibold text-3xl gap-6 md:max-w-[50%]'>
					<TextBlock text={feature.textContent} />
					{ feature.link &&
						<a
							href={feature.link.link}
							aria-label={`Link to: ${feature.link.text}`}
							className='relative w-fit px-8 py-2 text-base text-bg
							after:bg-accent after:absolute after:inset-0 after:rounded-full after:-z-1 after:hover:brightness-75 after:transition-all after:duration-300'>
							{ feature.link.text }
						</a>
					}
				</div>
				
			</div>
		</div>
	);
};

export default Feature;