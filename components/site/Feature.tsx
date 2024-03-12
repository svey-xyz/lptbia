import React from 'react';
import Image from './Image'
import { frontpageFeature } from '@/lib/data/types';
import TextBlock from '@/components/site/TextBlock';


const Feature = ({feature}:{feature:frontpageFeature}) => {
	return (
		<div 
			className="relative overflow-hidden items-center flex flex-col justify-center
			after:bg-accent-secondary after:inset-0 after:absolute after:-z-1">
			<div className="relative items-center flex main-padding z-10 flex-col lg:flex-row gap-6 py-8">
				<div className='relative flex flex-col font-semibold text-3xl text-bg gap-8 '>
					<TextBlock text={feature.textContent} />
					{ feature.link &&
						<a
							href={feature.link.link}
							aria-label={`Link to: ${feature.link.text}`}
							className='relative mx-auto px-10 py-2 after:transition-all after:duration-300
							after:bg-accent after:absolute after:inset-0 after:rounded-full after:-z-1 after:hover:brightness-75'>
							{ feature.link.text }
						</a>
					}
				</div>
					<Image
						image={feature.image}
						size={{
							width: 1200, height: 1200,
							sizes: "(max-width: 1200px) 60vw, (max-width: 1200px) 50vw, 50vw",
						}}
						className='h-auto w-full'
					/>
				

			</div>
		</div>
	);
};

export default Feature;