import ProjectsArchive from "@components/site/ProjectsArchive";

import React from "react";
import { projects } from "@lib/data/data";

export default async function ProjectsPage({ params }: { params: { slug: string } }) {
	return (
		<div className="main-padding flex flex-col">
			<ProjectsArchive projects={projects}/>
		</div>
	)
}