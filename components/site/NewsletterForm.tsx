'use client';

import React, { useRef, MouseEvent } from 'react';
import { useState } from 'react';

const NewsletterForm = ({ stacked, className, uuid, audienceID }:{stacked?:boolean,className?:string, uuid:string, audienceID:string}) => {

	const [email, setEmail] = useState<string>('')
	const [error, setError] = useState<boolean>(false)
	const inputRef = useRef<HTMLInputElement | null>(null)


	const handleChange = (value: string) => {
		setEmail(value)
		setError(false)
	}

	const handleSubmit = async (e: MouseEvent) => {
		e.preventDefault();

		const check = !/^[A-Za-z0-9._%+-]{1,64}@(?:[A-Za-z0-9-]{1,63}\.){1,125}[A-Za-z]{2,63}$/.test(
			email
		);

		if (check) setError(true)
		if (inputRef == null || !inputRef.current) setError(true)

		const res = await fetch("/api/newsletter-subscribe", {
			body: JSON.stringify({
				email: inputRef.current?.value,
				audienceID: audienceID
			}),

			headers: {
				"Content-Type": "application/json",
			},

			method: "POST",
		});


	}
	return (
		<form
			name='newsletter'
			method='post'
			className={`${ className } ${ stacked ? 'flex-col' : 'flex-row' } flex relative w-full gap-4`}>
			<label
				className='text-bg font-bold text-sm'
				htmlFor={`email-field-${uuid}`}
				hidden={true}
			>
				Email
			</label>
			<input
				id={`email-field-${uuid}`}
				type='email'
				ref={inputRef}
				name='email'
				required={true}
				className={`bg-bg py-1 px-3 text-fg outline-none focus:outline focus:outline-1 focus:outline-accent-secondary w-full`}
				placeholder="Email"
				value={email}
				onChange={e => { handleChange(e.target.value); }}
				autoCapitalize="off"
				autoCorrect="off"
			/>
			<button
				className='bg-accent-secondary py-1 px-10 text-bg hover:bg-accent-secondary/80 transition-colors duration-300'
				onClick={(e) => { handleSubmit(e); }}
				type='submit'
			>
				Submit
			</button>
		</form>
	);
};

export default NewsletterForm;