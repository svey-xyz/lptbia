/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */
import { structureTool } from 'sanity/structure'

/** PLUGINS */
import { colorInput } from '@sanity/color-input'
import { noteField } from 'sanity-plugin-note-field'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId, googleMapsKey } from '@lib/data/env'
import { studioTheme } from '@styles/studio.theme'
import StudioHeader from '@components/studio/StudioHeader'
import StudioLogo from '@components/studio/StudioLogo'
import { structure, schemaOptions, documentOptions } from '@studio/structure'
import { googleMapsInput } from '@sanity/google-maps-input'
import { PluginOptions, defineConfig } from 'sanity'
import { media, mediaAssetSource } from 'sanity-plugin-media'
import { iconify } from 'sanity-plugin-iconify';

const googleMapsProps = {
	apiKey: googleMapsKey,
	defaultZoom: 16,
	defaultLocale: 'en',
	defaultLocation: {
		lat: 43.64953343641148,
		lng: -79.42172173646215,
	}
}
const defaultDesk = structureTool({
	structure,
})
const deskPlugins = [
	defaultDesk,
	colorInput(),
	noteField(),
	media(),
	googleMapsInput(googleMapsProps),
	iconify({ showName: false, })
] as PluginOptions[]


const config = defineConfig({
  basePath: '/studio',
	name: 'lptbia_studio',
	title: 'LPT BIA Studio',
  projectId,
  dataset,
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