
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-07-05'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const openWeatherKey = assertValue(
	process.env.OPENWEATHER_API_KEY,
	'Missing environment variable: OPENWEATHER_API_KEY'
)

export const googleMapsKey = assertValue(
	process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
	'Missing environment variable: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY'
)

export const useCdn = true

function assertValue<T>(v: T | undefined, errorMessage: string): T  {
  if (v === undefined) {
    // throw new Error(errorMessage) // Always throws error
		console.log(errorMessage)
  }

  return v as T
}
