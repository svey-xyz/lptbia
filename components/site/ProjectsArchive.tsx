'use client';

import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { projectData, taxonomyData } from "@/types";
import {ProjectArchiveCard} from "../cards/archives/Project";

const allTag: taxonomyData = {
	_type: 'taxonomicTerm',
	_updatedAt: Date.now().toLocaleString(),
	_createdAt: Date.now().toLocaleString(),
	_rev: '1.0',
	_id: 'allTag',
	prefLabel: 'All',
}

export default function ProjectsArchive({projects}:{projects:Array<projectData>}) {
	
	const [filteredTagPrefLabel, setFilteredTagPrefLabel] = useState<string>(allTag.prefLabel)
	const allTagRef = useRef<HTMLInputElement>(null)

	// let tags: Array<taxonomyData> = []
	// let tagNames: Array<string> = []
	// projects.forEach(project => {
	// 	if (!project.data.tags) project.data.tags = []
	// 	project.data.tags?.unshift(allTag) // TODO all tag gets added every re-render but is being filtered out by code below, it should only be added once
	// 	project.data.tags?.forEach((tag: taxonomyData) => {
	// 		if (tagNames.indexOf(tag.prefLabel) == -1 && tag.termVisibility) {
	// 			tags.push(tag)
	// 			tagNames.push(tag.prefLabel)
	// 		}
	// 	});
	// });

	useEffect(()=> {
		allTagRef.current ? allTagRef.current.checked = true : null
	}, )

	const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFilteredTagPrefLabel(event.target?.value);
	}

	return (
		<div className="relative flex flex-col">
			<div className="relative flex flex-col pb-6 separator mb-4">
				<span className="relative text-6xl font-bold mt-4 mb-6 pb-2 separator">Artworks</span>

				<fieldset className="flex flex-row gap-4">
					{/* {(tags &&
						tags.map((tag) => {
							return (
								<div key={tag._id} className="group relative flex cursor-pointer w-auto px-4 flex-col items-center justify-center py-2">
									<input type="radio" name="taxonomies" value={tag.prefLabel}
										className="rounded-2xl border border-solid border-fg-primary
											hover:bg-fg-primary/20 checked:bg-fg-primary/40 absolute left-1/2 -translate-x-1/2 h-full w-full appearance-none
											cursor-pointer transition-all duration-200
											origin-center"
										checked={filteredTagPrefLabel == tag.prefLabel} onChange={handleFilterChange} ref={(() => { if (filteredTagPrefLabel == tag.prefLabel) return allTagRef})() } />
									<label className="leading-none text-sm">{tag.prefLabel}</label>
								</div>
							)
						})
					)} */}
				</fieldset>
			</div>
			<div className="relative grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-4 separator">
				{/* {(projects &&
					projects.map((project) => {
						let tagInFilter: boolean = false;
						project.data.tags?.forEach((tag: taxonomyData) => {
							if (tag.prefLabel == filteredTagPrefLabel) tagInFilter = true;
						});
						return (
							<ProjectArchiveCard key={project._id} project={project} filtered={tagInFilter} />
						)
					})
				)} */}
			</div>
		</div>
	)
}