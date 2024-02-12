import "server-only";

import { projectData, settingsData, featuredContentData, newsData } from "@lib/data/types"
import {featuredQuery, projectQuery, projectsQuery, settingsQuery, newsQuery, newsSingleQuery} from "@lib/data/queries"
import { sanityFetch } from "@lib/data/fetch"
import { QueryParams } from "next-sanity";

export const settings: settingsData = await sanityFetch({ query: settingsQuery });
export const featuredContent: featuredContentData = await sanityFetch({ query: featuredQuery });
export const projects: Array<projectData> = await sanityFetch({ query: projectsQuery });
export const singleProject = (async (params: QueryParams) => { return await sanityFetch<projectData>({ query: projectQuery, params: params }); });
export const news: Array<newsData> = await sanityFetch({ query: newsQuery });
export const singleNews = (async (params: QueryParams) => { return await sanityFetch<newsData>({ query: newsSingleQuery, params: params }); });