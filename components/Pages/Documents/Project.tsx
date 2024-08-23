import React from 'react';
import { createDataAttribute } from "@sanity/visual-editing";
import { projectData } from '@/types';


export interface ProjectPageProps {
	data: projectData
}

export const Project = ({ data }: ProjectPageProps) => {
	console.log('Made it this far. Heres the data: ', data)
	if (!data) return;
	return (
		<article className=''>
			<h1>{data.title}</h1>
		</article>
	);
};