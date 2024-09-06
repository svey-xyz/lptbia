'use client';

import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { ArchiveBlockType, article, BusinessPayload, newsData, projectData, taxonomyData } from "@/types";
import {GenericArchiveCard} from "@/components/cards/archives/Generic";
import dynamic from 'next/dynamic'

const alltaxonomy: taxonomyData = {
	_type: 'taxonomicTerm',
	_updatedAt: Date.now().toLocaleString(),
	_createdAt: Date.now().toLocaleString(),
	_rev: '1.0',
	_id: 'alltaxonomy',
	prefLabel: 'All',
}

type args = {
	// items: Array<article> | Array<newsData> | Array<BusinessPayload> | Array<projectData>,
	articles: Array<article> | Array<newsData> | Array<BusinessPayload> | Array<projectData>,
	// Card?: React.ComponentType<{
	// 	item: article | newsData | projectData | BusinessPayload;
	// 	filtered?: boolean; 
	// }>
	// type: string,
	archive: ArchiveBlockType,
}

type Card = React.ComponentType<{
	item: article | newsData | projectData | BusinessPayload;
	filtered?: boolean;
}>

export const ArchiveFilter = ({ articles, archive }: args) => {

	const [filteredtaxonomyPrefLabel, setFilteredtaxonomyPrefLabel] = useState<string>(alltaxonomy.prefLabel)
	const alltaxonomyRef = useRef<HTMLInputElement>(null)

	let ArchiveCard

	switch (archive.archiveType) {
		case ('business'):
			ArchiveCard = dynamic(() => import('@/components/cards/archives/Business'))
			break;
		default:
			ArchiveCard = dynamic(() => import('@/components/cards/archives/Generic'))
			break;

	}

	let taxonomies: Array<taxonomyData> = []
	let taxonomyNames: Array<string> = []
	
	articles.forEach(article => {
		if (!article.taxonomies) article.taxonomies = []
		article.taxonomies?.unshift(alltaxonomy) // TODO all taxonomy gets added every re-render but is being filtered out by code below, it should only be added once
		article.taxonomies?.forEach((taxonomy: taxonomyData) => {
			if (taxonomyNames.indexOf(taxonomy.prefLabel) == -1) {
				taxonomies.push(taxonomy)
				taxonomyNames.push(taxonomy.prefLabel)
			}
		});
	});

	useEffect(() => {
		alltaxonomyRef.current ? alltaxonomyRef.current.checked = true : null
	},)

	const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFilteredtaxonomyPrefLabel(event.target?.value);
	}

	return (
		<div className="relative flex flex-col">
				<fieldset className="flex flex-row gap-4">
					{(taxonomies &&
						taxonomies.map((taxonomy) => {
							return (
								<div key={taxonomy._id} className="group relative flex cursor-pointer w-auto px-4 flex-col items-center justify-center py-2">
									<input type="radio" name="taxonomies" value={taxonomy.prefLabel}
										className="rounded-2xl border border-solid border-fg-primary
											hover:bg-fg-primary/20 checked:bg-fg-primary/40 absolute left-1/2 -translate-x-1/2 h-full w-full appearance-none
											cursor-pointer transition-all duration-200
											origin-center"
										checked={filteredtaxonomyPrefLabel == taxonomy.prefLabel} onChange={handleFilterChange} ref={(() => { if (filteredtaxonomyPrefLabel == taxonomy.prefLabel) return alltaxonomyRef})() } />
									<label className="leading-none text-sm">{taxonomy.prefLabel}</label>
								</div>
							)
						})
					)}
				</fieldset>
			<div className="relative grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-4 separator">
				{((articles && ArchiveCard) &&
					articles.map((article) => {
						let taxonomyInFilter: boolean = false;
						article.taxonomies?.forEach((taxonomy: taxonomyData) => {
							if (taxonomy.prefLabel == filteredtaxonomyPrefLabel) taxonomyInFilter = true;
						});
						return (
							<ArchiveCard key={article._id} item={article} filtered={taxonomyInFilter} />
						)
					})
				)}
			</div>
		</div>
	)
}

// export default ArchiveFilter;