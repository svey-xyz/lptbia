
import MapClient from '@/components/site/MapClient';
import { loadArticles } from '@/sanity/queries/loadQuery';
import { article_Business, block_Map, icon } from '@/types';

interface LatLng {
	lat: number;
	lng: number;
}

interface BusinessMarker {
	geopoint: LatLng,
	business: article_Business
}

export const Map = async ({ data }: { data: block_Map }) => {
	if (!data) return

	const initial = await loadArticles<article_Business>('business')
	const businesses = initial.data;

	const fetchLocations = async () => {
		const positions: BusinessMarker[] = [];

		for (const business of businesses) {
			const address = business.addresses ? business.addresses[0] : null
			if (!address) return

			positions.push({
				geopoint: address.location,
				business
			});
		}

		return positions
	};

	const businessMarkers = await fetchLocations()
	
	return <MapClient mapData={data} businessMarkers={businessMarkers}/>
};

export default Map;