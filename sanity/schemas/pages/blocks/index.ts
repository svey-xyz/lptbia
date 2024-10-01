import { Text } from '@/sanity/schemas/pages/blocks/Text';
import { FeaturedTaxonomies } from './FeaturedTaxonomies';
import { Map } from '@/sanity/schemas/pages/blocks/Map';
import { FeaturedArticles } from '@/sanity/schemas/pages/blocks/FeaturedArticles';
import { Newsletter } from '@/sanity/schemas/pages/blocks/Newsletter';
import { Info } from '@/sanity/schemas/pages/blocks/Info';
import { Hero } from '@/sanity/schemas/pages/blocks/Hero';
import { Archive } from '@sanity/schemas/pages/blocks/Archive'
import { People } from '@sanity/schemas/pages/blocks/People'

export const Blocks = [FeaturedTaxonomies, Text, Map, FeaturedArticles, Newsletter, Info, Archive, Hero, People];

export const blockTypes = Blocks.map((block) => {
	return { type: block.name }
})

export default Blocks;