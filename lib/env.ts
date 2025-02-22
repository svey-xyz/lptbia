export const openWeatherKey = assertValue(
	process.env.OPENWEATHER_API_KEY,
	'Missing environment variable: OPENWEATHER_API_KEY'
)

export const googleMapsKey = assertValue(
	process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
	'Missing environment variable: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY'
)

export const mailchimpDatacenter = assertValue(
	process.env.MAILCHIMP_DATACENTER,
	'Missing environment variable: MAILCHIMP_DATACENTER'
)

export const mailchimpApiKey = assertValue(
	process.env.MAILCHIMP_API_KEY,
	'Missing environment variable: MAILCHIMP_API_KEY'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T  {
  if (v === undefined) {
		throw new Error(errorMessage)
  }

  return v as T
}
