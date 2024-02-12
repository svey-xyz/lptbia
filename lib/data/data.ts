import "server-only";

import { projectData, artistData, settingsData, featuredContentData, newsData } from "@lib/data/types"
import {artistQuery, artistsQuery, featuredQuery, projectQuery, projectsQuery, settingsQuery, newsQuery, newsSingleQuery} from "@lib/data/sanity.queries"
import { sanityFetch } from "@lib/data/sanity.fetch"
import { QueryParams } from "next-sanity";

export const settings: settingsData = await sanityFetch({ query: settingsQuery });
export const featuredContent: featuredContentData = await sanityFetch({ query: featuredQuery });
export const projects: Array<projectData> = await sanityFetch({ query: projectsQuery });
export const singleProject = (async (params: QueryParams) => { return await sanityFetch<projectData>({ query: projectQuery, params: params }); });
export const artists: Array<artistData> = await sanityFetch({ query: artistsQuery });
export const singleArtist = (async (params: QueryParams) => { return await sanityFetch<artistData>({ query: artistQuery, params: params }); });
export const news: Array<newsData> = await sanityFetch({ query: newsQuery });
export const singleNews = (async (params: QueryParams) => { return await sanityFetch<newsData>({ query: newsSingleQuery, params: params }); });