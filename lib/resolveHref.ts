export const resolveHref = (
	documentType?: string,
	slug?: string,
): string | undefined => {

	return `/article/${documentType}/${slug}`
	// switch (documentType) {
	// 	case 'page':
	// 		return slug ? `/${slug}` : undefined
	// 	case 'project':
	// 		return slug ? `/projects/${slug}` : undefined
	// 	default:
	// 		console.warn('Invalid document type:', documentType)
	// 		return undefined
	// }
}