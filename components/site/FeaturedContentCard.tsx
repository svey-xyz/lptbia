'use client'

import { sanityImage } from '@/types'
import React from 'react'
import { readableDate } from '@lib/readableDate'
import Image from '@components/site/Image'

function FeaturedContentCard({ feature }: {
	feature: {
		featuredContent: any;
		image?: sanityImage;
	}
}) {
	const cover = feature.image ? feature.image : feature.featuredContent.data.image

	const data = feature.featuredContent.data
	const type = feature.featuredContent._type
	const featureLink = `/${type}${type.endsWith('s') ? '' : 's'}/${data.slug.current}`

 	return (
		<a href={featureLink}
			className='group relative flex flex-col w-full h-80 min-h-full pb-2 cursor-pointer'>
			<div className='relative h-full object-contain w-full min-h-[320px]'>
				{ cover &&
					<Image image={cover} size={{sizes:"(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"}} />
				}
			</div>
			<div className='absolute inset-0 flex flex-row content-between duration-300 bg-gradient-radial from-transparent to-black/60 from-40%'>
				<div className='relative flex flex-col w-full h-full p-4 justify-between'>
						<span className='font-bold text-2xl text-white drop-shadow-dark line-clamp-3 max-w-[70%] text-wrap break-all'>
							{data.title}
						</span>
						<div className='flex flex-row justify-between'>
							{data.date && (
								<div className='text-white drop-shadow-dark'>{readableDate(data.date)}</div>
							)}
							{data.tags && (
								<div className='relative rounded-full px-4 py-0 bg-white text-black font-bold mix-blend-lighten'>
									{data.tags[0].prefLabel}
								</div>
							)}
						</div>
						
				</div>
			</div>
		</a>
 	)

}

export default FeaturedContentCard