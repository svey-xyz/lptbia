import { _BLOCK_TYPES, block, SettingsPayload } from '@/types';
import React from 'react';
import dynamic from 'next/dynamic'
import { loadSettings } from '@/sanity/queries/loadQuery';

interface BlockMap {
	[key: string]: React.ComponentType<{ data: any, className?: string, siteData?: SettingsPayload | undefined }>
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
	Contact: dynamic(() => import('@/components/blocks/Contact'))
}

export const Blocks = async ({ blocks, blockClasses }: { blocks: _BLOCK_TYPES, blockClasses?: string }) => {
	const settings = await loadSettings()

	return blocks.map((block, i) => {
		const BlockComponent = BlockList[block._type] ?? BlockList.Standard

		return (
			<BlockComponent data={block} className={`${blockClasses} ${ block.hiddenOnMobile && 'hidden lg:flex' }`} siteData={settings.data} />
		)
	})
};

// export default Blocks;