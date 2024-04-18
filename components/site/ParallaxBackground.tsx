import React, { ReactNode } from 'react';
import { sanityImage } from '../../lib/data/types';
import urlFor from '../../lib/urlFor'

const ParallaxBackground = ({ image, children }: { image: sanityImage, children: ReactNode }) => {
	const BG_URL = urlFor(image).url()
	return (
		<div
			className="relative overflow-hidden flex flex-col justify-center
			bg-fixed bg-no-repeat bg-cover bg-center text-accent
			after:absolute after:inset-0 after:bg-bg/30 after:backdrop-blur-sm"
			style={{
				backgroundImage: `url(${BG_URL})`
			}}>
				<div className='z-10'>
					{children}
				</div>
			</div>
	);
};

export default ParallaxBackground;