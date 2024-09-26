import { Text } from '@/sanity/schemas/pages/blocks/Text';
import { FeaturedTaxonomies } from './FeaturedTaxonomies';
import { Map } from '@/sanity/schemas/pages/blocks/Map';
import { FeaturedArticles } from '@/sanity/schemas/pages/blocks/FeaturedArticles';
import { Newsletter } from '@/sanity/schemas/pages/blocks/Newsletter';
import { Info } from '@/sanity/schemas/pages/blocks/Info';
import { Hero } from '@/sanity/schemas/pages/blocks/Hero';
import { Archive } from '@sanity/schemas/pages/blocks/Archive'
import { Directors } from '@sanity/schemas/pages/blocks/Directors'

export const Blocks = [FeaturedTaxonomies, Text, Map, FeaturedArticles, Newsletter, Info, Archive, Hero, Directors];

export const blockTypes = Blocks.map((block) => {
	return { type: block.name }
})

export default Blocks;