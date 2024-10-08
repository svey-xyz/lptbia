'use client'

import { block_Contact, SettingsPayload } from '@/types';
import React, { useState, useRef } from 'react';
import Form, { fieldArgs } from '@/components/site/Form';
import { readableAddress } from '@/lib/stringFunctions';

export const Contact = ({ data, className, siteData }: { data: block_Contact | undefined, className?: string, siteData?: SettingsPayload }) => {
	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const messageRef = useRef<HTMLInputElement>(null);

	const [message, setMessage] = useState<string | undefined>();
	const [error, setError] = useState<boolean | undefined>();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const formData = {
				user: nameRef.current?.value || '',
				pass: emailRef.current?.value || '',
				code: messageRef.current?.value || '',
			};

			let res = await fetch('/api/account', {
				cache: 'no-store',
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify(formData)
			});
			const data = await res.json()

			if (!res.ok) {
				setMessage(data.error)
				setError(true)
				return
			}

		} catch (error) {
			setMessage('Error creating account')
			setError(true)
			console.error('Error creating account', error);
		}
	};

	const formFields: Array<fieldArgs> = [
		{
			label: 'Name',
			ref: nameRef
		},
		{
			label: 'Email',
			ref: emailRef
		},
		{
			label: 'Message',
			ref: messageRef
		}
	]

	const ContactLegend = (
		<div>
			<h3>{ siteData?.title }</h3>
			<p className=''>
				{ siteData?.address &&
					readableAddress(siteData.address)
				}
			</p>
			<p className=''>

			</p>
			<p>
				For any inquiries, please fill out this form:
			</p>

		</div>
	)

	return (
		<div className={`${className} flex flex-col`}>
			<Form submitFn={handleSubmit} fields={formFields} FormLegend={ContactLegend} submitText={data?.buttonText} />
		</div>
	);
};

export default Contact;