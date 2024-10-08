'use client'

import { Menu } from '@/components/site/Menu';
import NavigationItem from '@/components/ui/NavigationItem';
import { object_NavigationItem } from '@/types';
import React, { useEffect, useRef, useState } from 'react';

export const Navigation = ({ navItems, className }: { navItems: Array<object_NavigationItem>, className?:string }) => {

	const navContainer = useRef<HTMLDivElement>(null)
	const [gapWidth, setGapWidth] = useState<number>(0); // default width, detect on server.
	const _BREAK_POINT = 50 // the value in pixels when nav should break to menu

	const handleResize = () => {
		const element = navContainer.current
		const parent = element?.parentElement
		if (!element || !parent) return

		setGapWidth(parent.clientWidth - element.clientWidth)
	}

	useEffect(() => {
		handleResize()
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, [handleResize]);

	return (
		<div className={`relative max-w-full w-full overflow-hidden ${className}`}>
			<div
				className={`relative flex flex-row min-h-full items-center w-fit max-w-full ml-auto ${(gapWidth > _BREAK_POINT) ? 'visible' : 'invisible'}`}
				ref={navContainer}
			>
				{ navItems.flatMap((item) => {
					return <NavigationItem key={item.title} item={item} />
				})}
			</div>

			{(gapWidth <= _BREAK_POINT) &&
				<div className='absolute right-0 top-0 h-full flex flex-col items-center justify-center'>
					<Menu navItems={navItems} />
				</div>
			}
		</div>
	);
};

// export default Navigation;