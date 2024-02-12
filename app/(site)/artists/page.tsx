import React from "react";
import ArtistsArchive from '@components/site/ArtistsArchive'
import {artists} from '@lib/data/data'
async function ArtistsPage({ params }: { params: { slug: string } }) {

	return (
		<div className="main-padding flex flex-col">
			<ArtistsArchive artists={artists} />
		</div>
	)
}

export default ArtistsPage