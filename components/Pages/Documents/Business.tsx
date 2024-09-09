import React from 'react';
import { article_Business } from '@/types';
import { notFound } from 'next/navigation'

// import { businessData } from '@/types';

export interface BusinessPageProps {
	data: article_Business
}

export const Business = ({ data }: BusinessPageProps) => {
	if (!data) return notFound();
	return (
		<article className=''>
			<h1>{data.title}</h1>
		</article>
	);
};