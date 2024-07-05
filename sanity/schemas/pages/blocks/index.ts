import { Text } from '@/sanity/schemas/pages/blocks/Text';
import { FeaturedTaxonomies } from './FeaturedTaxonomies';
import { Map } from '@/sanity/schemas/pages/blocks/Map';
import { NewsFeature } from '@/sanity/schemas/pages/blocks/NewsFeature';
import { Newsletter } from '@/sanity/schemas/pages/blocks/Newsletter';
import { Info } from '@/sanity/schemas/pages/blocks/Info';
import { Archive } from '@sanity/schemas/pages/blocks/Archive'

export const Blocks = [FeaturedTaxonomies, Text, Map, NewsFeature, Newsletter, Info, Archive];

export const blockTypes = Blocks.map((block) => {
	return { type: block.name }
})

export default Blocks;