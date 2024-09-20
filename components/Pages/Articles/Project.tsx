import React from 'react';
import { article, article_Project } from '@/types';
import { notFound } from 'next/navigation'
import Image from '@components/site/Image'
import TextBlock from '@/components/site/TextBlock';

export interface ProjectPageProps {
	data: article_Project | article
}

export const Project = async ({ data }: ProjectPageProps) => {
	if (!data) return notFound();
	if (data._type !== 'project') throw new Error(`Wrong article type - '${data._type}' - passed to Project article.)`)

	return (
		<article className='py-12 max-h-fit overflow-hidden
		'>
			{ data.image &&
				<div className='absolute inset-0 -m-12
					after:-z-1 after:absolute after:inset-0 after:bg-gradient-to-t after:from-bg after:to-bg/40'>
					<Image
						image={data.image}
						size={{ width: 1200, height: 1200 }}
						style={{ objectFit: 'cover', width: '100%', height: '100%', filter: 'blur(75px)' }}
						className='absolute inset-0 -z-1 '
					/>
				</div>
			}
			<div className='relative z-10 flex flex-col gap-2 main-padding'>
				<h1 className='text-accent text-5xl font-bold max-w-prose'>
					{data.title}
				</h1>
				<p className='text-accent-secondary text-sm max-w-prose'>
					{ data.description &&
						<TextBlock text={data.description} />
					}
				</p>


				
			</div>
		</article>
	);
};

export default Project