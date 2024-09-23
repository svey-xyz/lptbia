import { object_NavigationItem } from '@/types';
import React from 'react';
import { Bars2Icon } from '@heroicons/react/24/solid';
import { Button } from '@headlessui/react';

export const Menu = ({ navItems }: { navItems: Array<object_NavigationItem> }) => {
	return (
		<Button className=''>
			<Bars2Icon className='w-icon h-icon text-accent-secondary stroke-1 stroke-accent-secondary' />
		</Button>
	);
};

// export default Menu;