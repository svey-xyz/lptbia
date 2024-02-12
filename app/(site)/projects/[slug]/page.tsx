import TextBlock from "@components/site/TextBlock";
import { readableDate } from "@lib/readableDate";
import { ReactElement } from "react";
import ImageBuilder from "@lib/ImageBuilder";
import { singleProject } from '@lib/data/data'
import { getArtistPrefName } from "@/lib/getArtistPrefName";
import Gallery from "@/components/site/Gallery";


export default async function ProjectPage({ params }:{params: {slug: string}}) {

	const project = await singleProject(params);
	if (!project) return;

	const address: string | undefined = project.data.location?.address;
	const date: string | undefined = readableDate(project.data.date);
	const status: string | undefined = (typeof project.data.published !== undefined) ? project.data.published ? 'Active' : 'Archived' : undefined;
	const primaryTag = project.data.tags ? project.data.tags[0].prefLabel : ''

	return(
		<div className="main-padding flex flex-col overflow-hidden">
			<div className="absolute inset-0 m-[-6px]">
				{ project.data.image &&
					<ImageBuilder className='absolute inset-0 w-full object-cover blur-sm -z-1 saturate-150 brightness-[0.85] h-[600px] image-fade'
						image={project.data.image}
						sizes="(max-height: 100px) 10vw, (max-width: 100px) 10vw, 10vw"
						width={100}
						height={100}
						loading="lazy"
					/>
				}
			</div>
			<div className="relative separator flex flex-col pb-6">
				{/* PROJECT TITLE */}
				<h2 className="relative w-full h-full py-4 text-5xl separator">
					{project.data.title}
				</h2>

				{/* PROJECT INFO */}
				<div className="relative flex flex-row">
					{( project.data.location?.address &&
						<ProjectInfoSection title={'LOCATION'} content={address} />
					)}
					{(project.data.date &&
						<ProjectInfoSection title={'DATE'} content={date} />
					)}
					{(project.data.tags &&
						<ProjectInfoSection title={'TYPE'} content={primaryTag} />
					)}
					{((typeof project.data.published != undefined || project.data.published != undefined) &&
						<ProjectInfoSection title={'STATUS'} content={status} />
					)}
				</div>

				<div className="relative flex flex-col separator pb-6">
					{/* PROJECT BLURB */}
					{ project.data.about &&
						<div className="max-w-prose-short mb-8 italic text-fg/80">
							<TextBlock text={project.data.about}  />
						</div>
					}

					{ project.gallery &&
						<Gallery images={project.gallery} className="py-6" lightBox={true}/>
					}

					{project.writeup &&
						<div className="max-w-prose">
							<TextBlock text={project.writeup} />
						</div>
					}
				</div>
				
				{ project.media &&
					<div className="flex flex-row mt-4">
						<h3 className="relative w-full font-normal pb-4 separator">
							ADDITIONAL MEDIA
						</h3>
						{ project.media.map((media) => {
							return (
								<div key={media._id} className="">

								</div>
							)
						}) }
					</div>
				}

				<div className="flex flex-col md:flex-row w-full gap-12">
					<div className="flex flex-col my-4 w-full">
						{ (project.artists || project.credits) &&
							<div className="flex flex-col w-full">
								<h3 className="relative w-full font-normal text-xs pb-4 separator">CREDITS</h3>
								<h4 className="mt-4">Artists</h4>
								<div className="flex flex-col pb-8">
									{project.artists?.map((artist) => {
										return (
											<a key={artist._id} href={`/artists/${artist.slug}`} aria-label={`Link to artist: ${getArtistPrefName(artist)}`} className="hover:opacity-75">
												{getArtistPrefName(artist)}
											</a>
										)
									})}
								</div>
								{ project.credits &&
									<div>
										<TextBlock text={project.credits} />
									</div>
								}
							</div>
						}
						
					</div>

					<div className="flex flex-col my-4 w-full">
						{ project.sponsors && 
						<div className="flex flex-col w-full">
								<h3 className="relative w-full font-normal text-xs pb-4 separator">SPONSORS</h3>
								<div className="flex flex-col pb-8">
									{project.sponsors.map((sponsor) => {
										return (
											<a key={sponsor._id} href={sponsor.website} target="_blank" referrerPolicy="no-referrer"
												className="flex flex-col w-full p-8 items-center justify-center m-auto hover:opacity-75">
												{sponsor.image &&
													<ImageBuilder className='w-full h-auto'
														image={sponsor.image}
														sizes="(max-height: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
														width={480}
														height={480}
														loading="lazy"
													/>
												}
												{!sponsor.image &&
													<span className="">
														{sponsor.title}
													</span>
												}
											</a>
										)
									})}
								</div>
						</div>
						}			
					</div>
				</div>
			</div>
		</div>
	)
}

function ProjectInfoSection({
	title, content
}: {
	title?: string, content?: string
}): ReactElement | undefined {
	if (!content) return;
	return  <div className="relative flex flex-grow flex-col my-4">
		<span className="block text-sm tracking-tight">
			{ title }
		</span>
		<span className="block pl-4 pb-4 separator font-bold">
			{ content }
		</span>
	</div>

}