'use client'

import NavigationItem from '@/components/ui/NavigationItem';
import { object_NavigationItem } from '@/types';
import React, { useEffect, useRef, useState } from 'react';

export const Navigation = ({ navItems }: { navItems: Array<object_NavigationItem> }) => {

	const navContainer = useRef<HTMLDivElement>(null)
	const [gapWidth, setGapWidth] = useState<number>(0); // default width, detect on server.
	const _BREAK_POINT = 50 // the value in pixels when nav should break to menu

	const handleResize = () => {
		const element = navContainer.current
		const parent = element?.parentElement
		if (!element || !parent) return

		setGapWidth(parent.clientWidth - element.clientWidth)
		console.log('Gap width: ', gapWidth)
	}

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [handleResize]);

	return (
		<div className='relative w-full'>
			<div
				className={`relative flex flex-row min-h-full items-center max-w-fit ml-auto ${(gapWidth > _BREAK_POINT) ? 'visible' : 'invisible'}`}
				ref={navContainer}
			>
				{ navItems.flatMap((item) => {
					return <NavigationItem key={item.title} item={item} />
				})}
			</div>


		</div>
	);
};

// export default Navigation;