'use client';

import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { artistData, taxonomyData } from "../../lib/data/types";
import { getArtistPrefName } from "@/lib/getArtistPrefName";

const allTag: taxonomyData = {
	_type: 'taxonomicTerm',
	_updatedAt: Date.now().toLocaleString(),
	_createdAt: Date.now().toLocaleString(),
	_rev: '1.0',
	_id: 'allTag',
	prefLabel: 'All',
	termVisibility: true
}

export default function ArtistsArchive({ artists: artists }: { artists: Array<artistData> }) {
	const [filteredTagPrefLabel, setFilteredTagPrefLabel] = useState<string>(allTag.prefLabel)
	const allTagRef = useRef<HTMLInputElement>(null)
	let tags: Array<taxonomyData> = []
	let tagNames: Array<string> = []
	artists.forEach(artist => {
		if (!artist.tags) artist.tags = []
		if (artist.tags.indexOf(allTag) == -1) artist.tags?.unshift(allTag)
		artist.tags.forEach((tag: taxonomyData) => {
			if (tagNames.indexOf(tag.prefLabel) == -1 && tag.termVisibility) {
				tags.push(tag)
				tagNames.push(tag.prefLabel)
			}
		});
	});

	useEffect(() => {
		allTagRef.current ? allTagRef.current.checked = true : null
	},)

	const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFilteredTagPrefLabel(event.target?.value);
	}

	return (
		<div className="relative flex flex-col">
			<div className="relative flex flex-col pb-6 separator mb-4">
				<span className="relative text-6xl font-bold mt-4 mb-6 pb-2 separator">Artworks</span>

				<fieldset className="flex flex-row gap-4">
					{(tags &&
						tags.map((tag) => {
							return (
								<div key={tag._id} className="group relative flex cursor-pointer w-auto px-4 flex-col items-center justify-center py-2">
									<input type="radio" name="taxonomies" value={tag.prefLabel}
										className="rounded-2xl border border-solid border-fg-primary
											hover:bg-fg-primary/20 checked:bg-fg-primary/40 absolute left-1/2 -translate-x-1/2 h-full w-full appearance-none
											cursor-pointer transition-all duration-200
											origin-center"
										checked={filteredTagPrefLabel == tag.prefLabel} onChange={handleFilterChange} ref={(() => { if (filteredTagPrefLabel == tag.prefLabel) return allTagRef })()} />
									<label className="leading-none text-sm">{tag.prefLabel}</label>
								</div>
							)
						})
					)}
				</fieldset>
			</div>
			<div className="relative flex flex-row flex-wrap gap-x-6 pb-4 separator">
				{(artists &&
					artists.map((artist) => {
						let tagInFilter: boolean = false;
						artist.tags?.forEach((tag: taxonomyData) => {
							if (tag.prefLabel == filteredTagPrefLabel) tagInFilter = true;
						});
						if (!tagInFilter) return
						const prefName = getArtistPrefName(artist)
						return (
							<a key={artist._id} href={`/artists/${artist.slug}`} aria-label={`Link to artist: ${prefName}`}
								className="text-4xl font-bold hover:opacity-60">
								{prefName}
							</a>
						)
					})
				)}
			</div>
		</div>
	)
}