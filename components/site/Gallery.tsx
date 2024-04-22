'use client'

import { sanityImage } from '@/types';
import SwiperGallery from '@components/site/SwiperGallery'
import { XMarkIcon } from '@heroicons/react/24/solid'
import Image from '@components/site/Image'

import React, { useEffect, useRef, useState } from 'react';

const Gallery = ({ images, className, lightBox }: { images: Array<sanityImage>, className?: string, lightBox?: boolean}) => {
	const [mounted, setMounted] = useState(false)
	const refLightBox = useRef<HTMLDivElement>(null)
	const [activeSlide, setActiveSlide] = useState<number>(0)
	const [lightBoxState, setLightBoxState] = useState<boolean>(false)

	const openLightBox = ((e: React.MouseEvent<HTMLDivElement, MouseEvent>, i:number) => {
		if (lightBoxState) return
		setActiveSlide(i)
		setLightBoxState(true)

		refLightBox.current?.classList.remove('hidden')
		document.body.classList.add("overflow-y-hidden")
	})
	const closeLightBox = () => {
		if (!lightBoxState) return
		setLightBoxState(false)

		refLightBox.current?.classList.add('hidden')
		document.body.classList.remove("overflow-y-hidden")
	}

	useEffect(() => {
		setMounted(true)
		const keyDownHandler = (e: KeyboardEvent) => {
			if (e.key == "Escape" && lightBoxState) closeLightBox();
		};
		document.addEventListener("keyup", keyDownHandler);
	}, [lightBoxState, closeLightBox])

	return (
		<div className=''>
			<div className={`${className} flex flex-row flex-wrap gap-4`}>
				{ images.map((image, i) => {
					return(
					<div key={image.imageAsset._id} className={`${lightBox ? 'cursor-pointer' : '' } w-48 h-48`}
						onClick={(e) => { if (mounted && lightBox) openLightBox(e, i) }}>
						<Image image={image} size={{ width: 480, height: 480, sizes: "(max-height: 480px) 100vw, (max-width: 768px) 50vw, 33vw" }} />
					</div>)
				})}
			</div>
			{ lightBox &&
				<div className='fixed inset-0 bg-black/75 z-50 hidden' ref={refLightBox}>
					<XMarkIcon className="z-10 fixed text-fg-primary h-10 w-10 duration-100 hover:scale-[1.1] right-[10px] top-[10px] cursor-pointer drop-shadow-lg"
						onClick={ (e) => { if (mounted) closeLightBox() } } />
					<SwiperGallery images={images} slide={activeSlide} className='h-full'/>
				</div>
			}
		</div>
	);
};

export default Gallery;