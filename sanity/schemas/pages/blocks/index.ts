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
import { Contact } from './Contact'

export const BlocksWithoutColumns = [FeaturedTaxonomies, Text, Map, FeaturedArticles, Newsletter, Info, Archive, People, Image, Contact]

export const blockTypesWithoutColumns = BlocksWithoutColumns.map((block) => {
	return { type: block.name }
})


export const Blocks = [FeaturedTaxonomies, Text, Map, FeaturedArticles, Newsletter, Info, Archive, Hero, People, Columns, Image, Contact];

export const blockTypes = Blocks.map((block) => {
	return { type: block.name }
})

export default Blocks;