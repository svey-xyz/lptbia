import { Feature } from '@/sanity/schemas/pages/blocks/Feature';
import { FeaturedTaxonomies } from './FeaturedTaxonomies';
import { Map } from '@/sanity/schemas/pages/blocks/Map';
import { NewsFeature } from '@/sanity/schemas/pages/blocks/NewsFeature';
import { Newsletter } from '@/sanity/schemas/pages/blocks/Newsletter';
import { Info } from '@/sanity/schemas/pages/blocks/Info';
import { Archive } from '@sanity/schemas/pages/blocks/Archive'

const Blocks = [FeaturedTaxonomies, Feature, Map, NewsFeature, Newsletter, Info, Archive];

export default Blocks;