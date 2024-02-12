import { getArtistPrefName } from "@/lib/getArtistPrefName";
import TextBlock from "@components/site/TextBlock";
import ImageBuilder from "@lib/ImageBuilder";
import { projects, singleArtist } from "@lib/data/data";
import React from "react";

export default async function ArtistPage({ params }: { params: { slug: string } }) {
	const artist = await singleArtist(params)
	if (!artist) return

	const artistWorks = projects.map((project) => {
		let projectInvolvement: boolean = false
		project.artists?.forEach(projectArtist => {
			if (artist._id == projectArtist._id) projectInvolvement = true;
		})
		if (projectInvolvement) return project
	}).filter(function(project){ return typeof project !== undefined && project !== undefined})

	return (
		<div className="main-padding flex flex-col">
			<div className="relative flex flex-col xl:flex-row xl:gap-8">
				<div className="flex flex-col w-full max-w-prose">
					<span className="text-6xl font-bold my-4 md:my-8">{getArtistPrefName(artist)}</span>
					<div className="relative flex flex-col md:flex-row gap-x-4 separator pb-3">
						{artist.tags &&
							<div className="relative flex flex-col separator-top w-1/2 sm:pl-4 md:pl-6 pt-1">
								<span className="text-sm font-bold">LOCATION</span>
								<div className="rounded-2xl border border-solid border-fg-primary w-auto max-w-fit px-2 font-light text-sm my-2">
									{artist.tags[0].prefLabel}
								</div>
							</div>
						}
						{(artist.socials || artist.website) &&
							<div className="relative flex flex-col separator-top w-1/2 sm:pr-4 md:pr-6 pt-1">
								<span className="text-sm font-bold">LINKS</span>
								<div className="flex flex-row flex-wrap gap-2 py-2">
									{artist.website &&
										<a href={artist.website} target="_blank" aria-label={`Link to ${getArtistPrefName(artist)}'s website.`}
											className="rounded-2xl border border-solid border-fg-primary w-auto max-w-fit px-2 font-light text-sm">
											www
										</a>
									}
									{artist.socials &&
										artist.socials.map((social, i) => {
											return (
												<a key={`${social.socialType}-${i}`} href={social.url} target="_blank" aria-label={`Link to ${getArtistPrefName(artist)}'s ${social.socialType}.`}
													className="rounded-2xl border border-solid border-fg-primary w-auto max-w-fit px-2 font-light text-sm">
													{social.socialType}
												</a>
											)
										})

									}
								</div>
							</div>
						}
					</div>
					<div className="xl:max-w-prose w-full sm:px-4 md:px-6">
						{artist.bio &&
							<TextBlock text={artist.bio} />
						}
					</div>
				</div>
				<div className="mt-4 w-full">
					{artist.image &&
						<ImageBuilder className='h-auto w-full'
							image={artist.image}
							sizes="(max-height: 480px) 100vw, (max-width: 768px) 100vw, 33vw"
							width={540}
							height={540}
							loading="lazy"
						/>
					}
				</div>
			</div>
			{ artistWorks &&
				<div className="separator-top w-full relative mt-4">
					<span>ARTWORKS</span>
					<div className="my-4 flex flex-row flex-wrap">
						{artistWorks.map((project) => {
							return (
								<a key={project?._id} href={`/projects/${project?.data.slug.current}`} aria-label={`Link to project: ${project?.data.title}`}
									className="text-5xl font-bold hover:text-fg/70 text-fg">
									{project?.data.title}
								</a>
							)
						})}
					</div>
					
				</div>
			
			}

		</div>
	)
}