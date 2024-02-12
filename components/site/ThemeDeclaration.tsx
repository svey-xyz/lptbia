'use client';

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from 'next-themes'
import { themes } from '@components/site/Theme'
import { MoonIcon } from '@heroicons/react/24/solid'
import { camelCaseToWords } from "@lib/stringFunctions";

export default function ThemeDeclaration() {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return <div className="relative flex items-center flex-row font-bold text-sm">Theme is loading...</div>
	if (!theme) return <div className="relative flex items-center flex-row font-bold text-sm">Theme did not load properly</div>

	return (
		<div className="relative flex items-center flex-row font-bold text-sm">
			<span className="inline-block whitespace-nowrap uppercase">Background: {camelCaseToWords(theme)}</span>
		</div>
	)
}
