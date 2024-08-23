import React from 'react';
import { projectData } from '@/types';
import { notFound } from 'next/navigation'

export interface ProjectPageProps {
	data: projectData
}

export const Project = ({ data }: ProjectPageProps) => {
	if (!data) return notFound();
	return (
		<article className=''>
			<h1>{data.title}</h1>
		</article>
	);
};