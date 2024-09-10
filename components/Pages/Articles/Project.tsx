import React from 'react';
import { article_Project } from '@/types';
import { notFound } from 'next/navigation'

export interface ProjectPageProps {
	data: article_Project
}

export const Project = ({ data }: ProjectPageProps) => {
	if (!data) return notFound();
	return (
		<article className=''>
			<h1>{data.title}</h1>
		</article>
	);
};