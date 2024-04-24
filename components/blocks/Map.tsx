'use client';

import { MapBlockType } from '@/types';
import { useLoadScript, GoogleMap } from '@react-google-maps/api';
import React, { useMemo } from 'react';

export const Map = ({ data }: { data: MapBlockType }) => {
	if (!data) return

	const libraries = useMemo(() => ['places'], []);
	const mapCenter = useMemo(
		() => (data.centre),
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
		googleMapsApiKey: data.apiKey,
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