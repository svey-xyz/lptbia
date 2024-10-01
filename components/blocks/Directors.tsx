import { loadDirectors } from '@/sanity/queries/loadQuery';
import { block_Directors } from '@/types';
import React from 'react';

export const Directors = async ({ data }: { data: block_Directors }) => {
	const Directors = data.directors ?? (await loadDirectors()).data
	if (!Directors) return

	return (
		<div className='relative main-padding flex flex-col items-center py-12 gap-12 mb-8'>
			<div className='relative grid grid-flow-row grid-cols-[repeat(auto-fit,minmax(200px,1fr))] auto-rows-auto gap-12 max-w-full w-full'>
				{ Directors.map((director) => {
					return (
						<div key={director._id} className='flex flex-col items-left'>
							<h4 className='flex border-b-2 border-accent'>
								{director.name}
							</h4>
							<div className='flex flex-col text-md'>
								<span className='font-bold'>
									{director.position}
								</span>
								{ director.businesses &&
									<span className='font-light'>
										<em>
											{director.businesses[0].title}
										</em>
									</span>
								}
							</div>
						</div>
					)
				})}
			</div>

		</div>
	);
};

export default Directors;