/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'

/** PLUGINS */
import { colorInput } from '@sanity/color-input'
import { noteField } from 'sanity-plugin-note-field'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from '@sanityStudio/env'
import { studioTheme } from '@styles/studio.theme'
import StudioHeader from '@components/studio/StudioHeader'
import StudioLogo from '@components/studio/StudioLogo'
import { structure, schemaOptions, documentOptions } from '@/sanityStudio/structure'
import { googleMapsInput } from '@sanity/google-maps-input'
import { defineConfig } from 'sanity'
import { media } from 'sanity-plugin-media'

const defaultDesk = deskTool({
	structure,
})
const deskPlugins = [
	defaultDesk,
	visionTool({
		defaultApiVersion: apiVersion
	}),
	colorInput(),
	noteField(),
	media(),
	googleMapsInput({
		apiKey: 'AIzaSyDKGKJT6WLx22pBmZTH-AqOhQhVLoe3UEY',
		defaultZoom: 16,
  	defaultLocale: 'en',
  	defaultLocation: {
			lat: 43.64953343641148, 
			lng: -79.42172173646215,
		}
	}),
]


const config = defineConfig({
  basePath: '/studio',
	name: 'oam_studio',
	title: 'OAM Studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
	schema: schemaOptions,
	plugins: deskPlugins,
	document: documentOptions,
	studio: {
		components: {
			logo: StudioLogo,
			navbar: StudioHeader
		}
	},
	theme: studioTheme
})
export default config;