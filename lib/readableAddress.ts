import { article_Address } from "@/types"

export const readableAddress = (address: article_Address): string | undefined => {

	const a = (address.unit && address.number) ? `${address.number}.${address.unit}` : address.number ? `${address.number}` : null
	const b = (address.street) ? `${address.street}` : null

	return (a && b) ? `${a} ${b}` : a ? a : b ? b : ''
}