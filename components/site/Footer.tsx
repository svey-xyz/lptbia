import React from 'react';
// import { settings } from "@lib/data/data";
import NewsletterForm from '@components/site/NewsletterForm'
import Socials from '@components/site/Socials'

const Footer = ({}:{}) => {
	return (
		<section className='absolute bottom-0 left-0 right-0 bg-bg-secondary'>
			<div className='main-padding py-8 text-bg flex flex-col md:flex-row gap-x-8 gap-y-2 md:items-center'>
				{/* <span className='font-bold'>{ settings.motto && settings.motto }</span> */}
				<NewsletterForm />
				{/* { settings.socials &&
					<Socials socials={settings.socials} className='text-bg' />
				} */}
			</div>

		</section>
	);
};

export default Footer;