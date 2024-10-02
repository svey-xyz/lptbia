import React from 'react';
import { block_Hero } from '@/types';
import urlFor from '@/lib/urlFor';

const Hero = ({ data, className }: { data: block_Hero | undefined, className?:string }) => {
	if (!data) return;
	const BG_URL = data?.image ? urlFor(data?.image).url() : ''

	return (
		<div
			className={`${className} max-w-full bg-fixed bg-no-repeat bg-cover bg-center text-accent
				after:absolute after:inset-0 after:bg-gradient-to-t after:from-bg after:to-bg/0`}
			style={{
				backgroundImage: `url(${BG_URL})`
			}}
		>
			<h2 className='font-black text-accent text-4xl pt-80 pb-6 z-10'>
				{data.title}
			</h2>
		</div>
	);
};

export default Hero;