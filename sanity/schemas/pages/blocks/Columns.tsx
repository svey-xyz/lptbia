import { defineField } from 'sanity';
import constructors from '@/sanity/schemas/pages/constructors';
import { HiViewColumns } from "react-icons/hi2";

import { Archive } from './Archive';
import { FeaturedArticles } from './FeaturedArticles';
import { FeaturedTaxonomies } from './FeaturedTaxonomies';
import { Info } from './Info';
import { Newsletter } from './Newsletter';
import { People } from './People';
import { Map } from './Map';
import { Text } from './Text';
import { Image } from './Image';
import { camelCaseToWords } from '@/lib/stringFunctions';
import { block } from '@/types';
import { Contact } from './Contact';

const BlocksWithoutColumns = [FeaturedTaxonomies, Text, Map, FeaturedArticles, Newsletter, Info, Archive, People, Image, Contact]

const blockTypesWithoutColumns = BlocksWithoutColumns.map((block) => {
	return { type: block.name }
})

const fields = [
	defineField({
		title: 'Blocks',
		name: 'blocks',
		type: 'array',
		of: blockTypesWithoutColumns,
	}),
]

const preview = {
	select: {
		blocks: 'blocks'
		// logo: 'logo',
	},
	prepare(value: any) {
		const { title, blocks } = value
		const subtitle = blocks ?
			`Blocks: ${blocks?.map((block: block, i: number, arr: Array<block>) => {
				return ` ${camelCaseToWords(block._type)}`
			})}` :
			`No blocks configured!`
		return {
			title: 'Columns',
			subtitle,
			media: HiViewColumns
		}
	}
}

export const Columns = constructors.block({ name: 'Columns', fields, icon: HiViewColumns, preview })