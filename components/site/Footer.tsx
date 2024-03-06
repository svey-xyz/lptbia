import React from 'react';
import { settings } from "@lib/data/data";

const Footer = ({}:{}) => {
	return (
		<section className='bg-bg-secondary'>
			<div className='main-padding py-8 text-bg'>
				<span className='font-bold'>{ settings.motto && settings.motto }</span>
			</div>

		</section>
	);
};

export default Footer;