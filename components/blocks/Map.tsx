
import MapClient from '@/components/site/MapClient';
import { loadArticles } from '@/sanity/queries/loadQuery';
import { article_Business, block_Map, icon } from '@/types';

interface LatLng {
	lat: number;
	lng: number;
}

interface LocationWithIcon {
	geopoint: LatLng,
	icon?: icon
}

export const Map = async ({ data }: { data: block_Map }) => {
	if (!data) return

	const initial = await loadArticles<article_Business>('business')
	const businesses = initial.data;

	const fetchLocations = async () => {
		try {
			const positions: LocationWithIcon[] = [];

			for (const business of businesses) {
				const location = business.content.address?.location
				if (!location) return

				const address = `${location?.number} ${location?.street}`
				const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${data.apiKey}`);
				const dataReturn = await response.json();
				if (dataReturn.results && dataReturn.results.length > 0) {
					const { lat, lng } = dataReturn.results[0].geometry.location;
					positions.push({
						geopoint: { lat, lng },
						icon: business.content.address?.icon
					});
				} else {
					console.error('No results found for address:', address);
				}
			}

			return positions
		} catch (error) {
			console.error('Error geocoding addresses:', error);
		}
	};

	const locationsWithIcons = await fetchLocations()
	
	return <MapClient mapData={data} locationsWithIcons={locationsWithIcons}/>
};

export default Map;