import { BusinessMarker } from '@/components/blocks/Map';
import TextBlock from '@/components/site/TextBlock';
import { Button } from '@headlessui/react';
import React from 'react';
import { IoCloseSharp } from 'react-icons/io5';

export const InfoPanel = ({ marker, handler, className }: { marker: BusinessMarker, handler: () => void, className: string }) => {
	return (
		<div
			className={`absolute top-0 left-0 h-full w-72 bg-white p-4 ${className}`}
		>
			<Button
				className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-700"
				onClick={handler}
			>
				<IoCloseSharp className='h-icon w-icon' />
			</Button>
			<div>
				<h2 className="text-lg font-bold">{marker.business.title}</h2>
				{/* <p className="mt-2 text-gray-600">{marker.business.title}</p> */}
				<TextBlock text={marker.business.description} />
			</div>
		</div>
	);
};

// export default InfoPanel;