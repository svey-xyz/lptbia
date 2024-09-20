
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
		const positions: LocationWithIcon[] = [];

		for (const business of businesses) {
			const address = business.addresses ? business.addresses[0] : null
			if (!address) return

			const primarytaxonomy = business.taxonomies ? business.taxonomies[0] : null
			const icon = primarytaxonomy ? primarytaxonomy.icon : undefined

			positions.push({
				geopoint: address.location,
				icon
			});
		}

		return positions
	};

	const locationsWithIcons = await fetchLocations()
	
	return <MapClient mapData={data} locationsWithIcons={locationsWithIcons}/>
};

export default Map;