import React from "react";
import TextBlock from '@components/site/TextBlock'
import { settings } from '@lib/data/data'
export default async function ArtistPage({ params }: { params: { slug: string } }) {


	return (
		<div className="main-padding py-8">
			<h2 className="my-2 text-3xl font-bold">This Land</h2>
			<TextBlock text={settings.landAcknowledgement}/>
		</div>
	)
}