export const camelCaseToWords = (string: string) => {
	var words = string.match(/[A-Za-z][a-z]*/g) || [];

	return words.map(capitalize).join(" ");
}

export const pluralize = (string: string) => {
	return string.endsWith('s') ? string : `${string}s`
}

export const capitalize = (word: string) => {
	return word.charAt(0).toUpperCase() + word.substring(1);
}

export const breakAdditionSign = (text: string) => {
	return text.replace(' + ', '+\n')
}