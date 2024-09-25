import React from 'react';
// import { featuredContent } from "@lib/data/data";

import Image from '@/components/site/Image'
import { block_Hero } from '@/types';
// import urlFor from '@/lib/urlFor';


const Hero = ({ data }: { data: block_Hero | undefined }) => {
	if (!data) return;
	return (
		<div className="relative overflow-hidden flex flex-col justify-center items-center py-16 gap-12">
			<div className="relative flex main-padding flex-col items-center">
				<h2 className='font-bold text-accent text-3xl'>
					{data.title}
				</h2>
			</div>
		</div>
	);
};

export default Hero;