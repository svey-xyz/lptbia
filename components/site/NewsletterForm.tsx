'use client';

import React from 'react';
import { useState } from 'react';

const NewsletterForm = ({stacked}:{stacked?:boolean}) => {
	const [email, setEmail] = useState<string>('')
	const [error, setError] = useState<boolean>(false)

	const handleChange = (value: string) => {
		setEmail(value)
		setError(false)
	}

	const handleSubmit = () => {
		const check = !/^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/.test(
			email
		);

		if (check) {
			setError(true)
		}
	}
	return (
		<div className={`${ stacked ? 'flex-col' : 'flex-row' } flex relative w-full gap-4`}>
			<input
				className={`bg-bg py-1 px-3 text-fg outline-none focus:outline focus:outline-1 focus:outline-accent w-full`}
				type="text"
				placeholder="Email"
				value={email}
				onChange={e => { handleChange(e.target.value); }}
			/>
			<button
				className='bg-accent py-1 px-10 text-bg hover:bg-accent-secondary transition-colors duration-300'
				onClick={() => { handleSubmit(); }}>
				Submit
			</button>
		</div>
	);
};

export default NewsletterForm;