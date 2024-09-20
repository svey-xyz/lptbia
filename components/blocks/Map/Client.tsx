'use client';

import { block_Map } from '@/types';
import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import React, { useCallback, useMemo, useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { BusinessMarker } from '@/components/blocks/Map';
import { InfoPanel } from '@/components/blocks/Map/InfoPanel';

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
					<InfoPanel 
						marker={selectedMarker}
						handler={handleClose}
						className={`transition-all duration-500 ${panelOpen ? 'translate-x-0' : '-translate-x-full'}`}
					/>
				)}
			</GoogleMap>
		</div>
	);
};

export default MapClient;