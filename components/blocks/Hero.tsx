import React from 'react';
import { block_Hero } from '@/types';
import urlFor from '@/lib/urlFor';

const Hero = ({ data }: { data: block_Hero | undefined }) => {
	if (!data) return;
	const BG_URL = data?.image ? urlFor(data?.image).url() : ''

	return (
		<div
			className={`relative overflow-hidden flex flex-col justify-center bg-fixed bg-no-repeat bg-cover bg-center text-accent
				after:absolute after:inset-0 after:bg-gradient-to-t after:from-bg after:to-bg/0`}
			style={{
				backgroundImage: `url(${BG_URL})`
			}}
		>
			<div className="relative flex main-padding flex-col items-center pt-80 pb-6 z-10">
				<h2 className='font-black text-accent text-4xl'>
					{data.title}
				</h2>
			</div>
		</div>
	);
};

export default Hero;