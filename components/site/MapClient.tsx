'use client';

import { article_Business, block_Map, icon } from '@/types';
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import React, { useCallback, useMemo, useState } from 'react';
import { Icon } from '@iconify/react';
import { IoCloseSharp } from 'react-icons/io5';

interface LatLng {
	lat: number;
	lng: number;
}

interface BusinessMarker {
	geopoint: LatLng,
	business: article_Business
}

export const MapClient = ({ mapData, businessMarkers }: { mapData: block_Map, businessMarkers?: Array<BusinessMarker> }) => {
	const libraries = useMemo(() => ['places'], []);
	const mapCenter = useMemo(
		() => (mapData.centre),
		[]
	);
	const [selectedMarker, setSelectedMarker] = useState<BusinessMarker | null>(null);
	const [panelOpen, setPanelOpen] = useState<boolean>(false);

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

	const onMarkerClick = useCallback((marker: BusinessMarker) => {
		setSelectedMarker(marker);
		setPanelOpen(true);
	}, []);

	const handleClose = () => {
		setSelectedMarker(null); // Close the InfoWindow
		setPanelOpen(false);
	};

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
			>
				{ businessMarkers?.map((marker, index) => {
					// console.log('Icon: ', location.icon)
					const primarytaxonomy = marker.business.taxonomies ? marker.business.taxonomies[0] : null
					const icon = primarytaxonomy ? primarytaxonomy.icon : undefined

					const iconString = icon?.name.split(':') || []
					
					// console.log('Icon URL: ', `https://api.iconify.design/${iconString[0]}/${iconString[1]}.svg`,)
					return (<Marker
						key={index}
						position={marker.geopoint}
						// icon={{
						// 	url: `https://api.iconify.design/${iconString[0]}/${iconString[1]}.svg?color=%23b00c00`,
						// 	scaledSize: new window.google.maps.Size(32, 32), // Adjust the size of the icon as needed
						// }}
						onClick={() => onMarkerClick(marker)}
						
					/>)
				})}
				{ selectedMarker && (
					<div
						className={`absolute top-0 left-0 h-full w-72 bg-white p-4 transform transition-transform duration-300 ${panelOpen ? 'translate-x-0' : '-translate-x-full'
							}`}
					>
						<button
							className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-gray-700"
							onClick={handleClose}
						>
							<IoCloseSharp className='h-icon w-icon' />
						</button>
						{selectedMarker ? (
							<div>
								<h2 className="text-lg font-bold">{selectedMarker.business.title}</h2>
								<p className="mt-2 text-gray-600">{selectedMarker.business.title}</p>
							</div>
						) : (
							<p className="text-gray-500">No marker selected.</p>
						)}
					</div>
				)}
			</GoogleMap>
		</div>
	);
};

export default MapClient;