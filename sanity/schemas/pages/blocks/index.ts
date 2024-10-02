import { Text } from './Text';
import { FeaturedTaxonomies } from './FeaturedTaxonomies';
import { Map } from './Map';
import { FeaturedArticles } from './FeaturedArticles';
import { Newsletter } from './Newsletter';
import { Info } from './Info';
import { Hero } from './Hero';
import { Archive } from './Archive'
import { People } from './People'
import { Columns } from './Columns'
import { Image } from './Image'


export const Blocks = [FeaturedTaxonomies, Text, Map, FeaturedArticles, Newsletter, Info, Archive, Hero, People, Columns, Image];

export const blockTypes = Blocks.map((block) => {
	return { type: block.name }
})

export default Blocks;