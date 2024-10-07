import { _BLOCK_TYPES, _BLOCK_TYPES_WITHOUT_COLUMNS } from '@/types';
import React from 'react';
import dynamic from 'next/dynamic'

interface BlockMap {
	[key: string]: React.ComponentType<{ data: any, className?: string }>
}

const BlockList: BlockMap = {
	Standard: dynamic(() => import('@components/blocks/Standard')),
	FeaturedTaxonomies: dynamic(() => import('@components/blocks/FeaturedTaxonomies')),
	Text: dynamic(() => import('@/components/blocks/Text')),
	Map: dynamic(() => import('@components/blocks/Map')),
	Newsletter: dynamic(() => import('@components/blocks/Newsletter')),
	FeaturedArticles: dynamic(() => import('@/components/blocks/FeaturedArticles')),
	Info: dynamic(() => import('@components/blocks/Info')),
	Archive: dynamic(() => import('@/components/blocks/Archive')),
	People: dynamic(() => import('@/components/blocks/People')),
	Image: dynamic(() => import('@/components/blocks/Image')),
}

export const Blocks = ({ blocks, blockClasses }: { blocks: _BLOCK_TYPES | _BLOCK_TYPES_WITHOUT_COLUMNS, blockClasses?: string }) => {
	
	return blocks.map((block, i) => {
		const BlockComponent = BlockList[block._type] ?? BlockList.Standard

		return (
			<BlockComponent data={block} className={blockClasses} />
		)
	})
};

// export default Blocks;