'use client'

import { VisualEditing } from 'next-sanity'
import { useEffect } from 'react'

export function AutomaticVisualEditing() {
	useEffect(() => {
		// If not an iframe turn off Draft Mode
		if (window === parent) {
			location.href = '/api/disable-draft'
		}
	}, [])

	return <VisualEditing />
}