'use client'

import client from '@lib/data/sanity.client';
import { sanityImage } from '@lib/data/types';
import { useNextSanityImage } from 'next-sanity-image'
import Img from 'next/image'
import React from 'react'

function ImageBuilder({
	image, style, width, height, sizes, props, className, loading
}:{
	image: sanityImage,
	style?: React.CSSProperties,
	width?: number,
	height?: number,
	sizes?: string,
	props?: {},
	className?: string
	loading?: "eager" | "lazy" | undefined,
}) {
	const imageProps = useNextSanityImage(client, image);

	return (<Img
		{...imageProps}
		{...props}
		style={style}
		width={width}
		height={height}
		sizes={sizes}
		placeholder="blur"
		blurDataURL={image.imageAsset.metadata.lqip}
		alt={image.imageAsset.description ? image.imageAsset.description : 'No alt text found'}
		className={className}
		loading={loading}
	/>)
}

export default ImageBuilder