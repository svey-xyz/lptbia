import { address, location } from "@/types"

export const readableAddress = (loc: location): string | undefined => {

	const a = (loc.unit && loc.number) ? `${loc.number}.${loc.unit}` : loc.number ? `${loc.number}` : null
	const b = (loc.street) ? `${loc.street}` : null

	return (a && b) ? `${a} ${b}` : a ? a : b ? b : ''
}