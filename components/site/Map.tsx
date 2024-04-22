"use client";

import React, { useMemo } from 'react';
import { Data, GoogleMap, useJsApiLoader, useLoadScript } from '@react-google-maps/api';
import { type location } from '@/types'

const Map = ({ apiKey, centre }: { apiKey: string | undefined, centre: location | undefined }) => {
	if (!apiKey) return

	console.log('Map centre: ', centre)
	
	const libraries = useMemo(() => ['places'], []);
	const mapCenter = useMemo(
		() => (centre),
		[]
	);

	const mapOptions = useMemo<google.maps.MapOptions>(
		() => ({
			disableDefaultUI: true,
			clickableIcons: true,
			scrollwheel: false,
		}),
		[]
	);

	const { isLoaded } = useLoadScript({
		googleMapsApiKey: apiKey,
		libraries: libraries as any,
	});

	if (!isLoaded) {
		return <p>Loading...</p>;
	}


	return (
		<div className='relative main-padding flex flex-row justify-center py-12'>
			<GoogleMap
				options={mapOptions}
				zoom={14}
				center={mapCenter}
				mapTypeId={google.maps.MapTypeId.ROADMAP}
				mapContainerStyle={{ width: '80%', height: '400px' }}
				onLoad={() => console.log('Map Component Loaded...')}
			/>
		</div>
	);
};

export default Map;