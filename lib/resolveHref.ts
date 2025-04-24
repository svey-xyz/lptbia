import { ArchivePayload, article, object_Contact, PagePayload } from "@/types"

export const resolveArticleHref = (
	article: article,
): string | undefined => {
	const _SLUG = article.slug?.current || article.slug

	return `/article/${article._type}/${_SLUG }`
}


export const resolvePageHref = (page: ArchivePayload | PagePayload): string => {
	const slug = page._type == 'page' ? `/${(page as PagePayload).slug}` : `/archives/${(page as ArchivePayload)._id}`

	return slug
}

export const resolveArchiveHref = (articleType: string): string => {
	const slug = `/archives/${articleType}`

	return slug
}

export const resolveContactHref = (contact: object_Contact | undefined): string => {
	if (!contact) return ''
	
	if (contact.website) return contact.website
	if (contact.socials) return contact.socials[0].url

	return ''
}