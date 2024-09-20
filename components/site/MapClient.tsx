'use client';

import { block_Map, icon } from '@/types';
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import React, { useMemo } from 'react';
import { Icon } from '@iconify/react';

interface LatLng {
	lat: number;
	lng: number;
}

interface LocationWithIcon {
	geopoint: LatLng,
	icon?: icon
}

export const MapClient = ({ mapData, locationsWithIcons }: { mapData: block_Map, locationsWithIcons?: Array<LocationWithIcon> }) => {
	const libraries = useMemo(() => ['places'], []);
	const mapCenter = useMemo(
		() => (mapData.centre),
		[]
	);

	const mapHeight: string = '400px'

	const mapOptions = useMemo<google.maps.MapOptions>(
		() => ({
			// disableDefaultUI: true,
			clickableIcons: true,
			scrollwheel: false,
			mapId: '9f77439149649dc7',
		}),
		[]
	);

	const { isLoaded } = useLoadScript({
		googleMapsApiKey: mapData.apiKey,
		libraries: libraries as any,
	});

	if (!isLoaded) {
		return (
			<div className={`relative main-padding py-12 bg-bg`}>
				<div className='flex flex-col justify-center items-center' style={{ height: mapHeight }}>
					<p className={`text-accent font-black`}>
						Loading Map...
					</p>
				</div>
			</div>
		)
	}



	return (
		<div className='relative main-padding flex flex-row justify-center py-12 bg-bg'>
			<GoogleMap
				options={mapOptions}
				zoom={16}
				center={mapCenter}
				id='9f77439149649dc7'
				// mapTypeId='162b1e292ce4fc80'
				mapContainerStyle={{ width: '80%', height: mapHeight }}
				// onLoad={() => console.log('Map Component Loaded...')}
			>
				{ locationsWithIcons?.map((location, index) => {
					// console.log('Icon: ', location.icon)
					const iconString = location.icon?.name.split(':') || []
					// console.log('Icon URL: ', `https://api.iconify.design/${iconString[0]}/${iconString[1]}.svg`,)
					return (<Marker
						key={index}
						position={location.geopoint}
						// icon={{
						// 	url: `https://api.iconify.design/${iconString[0]}/${iconString[1]}.svg?color=%23b00c00`,
						// 	scaledSize: new window.google.maps.Size(32, 32), // Adjust the size of the icon as needed
						// }}
						
					/>)
				})}
			</GoogleMap>
		</div>
	);
};

export default MapClient;