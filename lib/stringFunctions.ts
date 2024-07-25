import { plural } from 'pluralize'
import slugify from 'slugify'

export const slugOptions = {
	replacement: '-',  // replace spaces with replacement character, defaults to `-`
	remove: undefined, // remove characters that match regex, defaults to `undefined`
	lower: true,      // convert to lower case, defaults to `false`
	strict: true,     // strip special characters except replacement, defaults to `false`
	locale: 'en',      // language code of the locale to use
	trim: true         // trim leading and trailing replacement chars, defaults to `true`
}

export const camelCaseToWords = (string: string) => {
	var words = string.match(/[A-Za-z][a-z]*/g) || [];

	return words.map(capitalize).join(" ");
}

export const pluralize = (string: string) => {
	return plural(string)
}

export const slugifyWithOptions = (string: string) => {
	return slugify(string, slugOptions)
}

export const capitalize = (word: string) => {
	return word.charAt(0).toUpperCase() + word.substring(1);
}

export const breakAdditionSign = (text: string) => {
	return text.replace(' + ', '+\n')
}