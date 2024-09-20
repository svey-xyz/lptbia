import React from 'react';
import { article, article_Project } from '@/types';
import { notFound } from 'next/navigation'

export interface ProjectPageProps {
	data: article_Project | article
}

export const Project = async ({ data }: ProjectPageProps) => {
	if (!data) return notFound();
	if (data._type !== 'project') throw new Error(`Wrong article type - '${data._type}' - passed to Project article.)`)

	return (
		<article className=''>
			<h1>{data.title}</h1>
		</article>
	);
};

export default Project