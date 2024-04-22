import { feature } from '@/sanity/schemas/pages/blocks/feature';
import { featuredTaxonomies } from './featuredTaxonomies';
import { map } from '@/sanity/schemas/pages/blocks/map';
import { newsFeature } from '@/sanity/schemas/pages/blocks/newsFeature';
import { newsletter } from '@/sanity/schemas/pages/blocks/newsletter';

const Blocks = [featuredTaxonomies, feature, map, newsFeature, newsletter];

export default Blocks;