import React from 'react';
import { BusinessPayload } from '@/types';
import { notFound } from 'next/navigation'

// import { businessData } from '@/types';

export interface BusinessPageProps {
	data: BusinessPayload
}

export const Business = ({ data }: BusinessPageProps) => {
	if (!data) return notFound();
	return (
		<article className=''>
			<h1>{data.title}</h1>
		</article>
	);
};