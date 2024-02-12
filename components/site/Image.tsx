'use client'

import client from '../../lib/data/client';
import { sanityImage } from '../../lib/data/types';
import { useNextSanityImage } from 'next-sanity-image'
import Img from 'next/image'
import React from 'react'

const Image = ({
	image, size, className
}: {
	image: sanityImage,
	size?: { width?: number, height?: number, sizes?: string },
	className?: string
}) => {
	const imageProps = useNextSanityImage(client, image);

	return (<Img
		{...imageProps}
		width={size?.width}
		height={size?.height}
		sizes={size?.sizes}
		placeholder="blur"
		blurDataURL={image.imageAsset.metadata.lqip}
		alt={image.imageAsset.description ? image.imageAsset.description : 'No alt text found'}
		className={className}
		loading="lazy"
	/>)
}

export default Image