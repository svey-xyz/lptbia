"use client";
import { Functions } from '@/lib/mathFunctions';
import { ThemeProvider, useTheme } from 'next-themes'
import React, { ReactNode, useEffect, useState } from 'react';
import { getCurrent } from '@lib/server/weather'
import { CurrentWeather } from 'openweather-api-node';

type themeLiteral = 'dark'| 'light'

export const themes = ['dark', 'light'] as const


export default function ThemeHandler({
	children
}: {
	children: ReactNode
}) {
	const [height, setHeight] = useState<number>()
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => {
		setMounted(true);
		if (mounted) return
		if (!theme || !themes.includes(theme as themeLiteral)) setTheme(themes[0])

		setSize();
		window.addEventListener('resize', () => {
			setSize();
		})

		function setSize() {
			const isMobile = (/Mobi|Android/i.test(navigator.userAgent)) ? true : false;

			if (!isMobile) setHeight(window.innerHeight);
			const vh = height ? setHeight(height * 0.01) : 0;

			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}

		
	}, [height, setTheme, theme, mounted])

	return (
		<ThemeProvider attribute="class" enableSystem={true} defaultTheme="light"
			themes={themes.map((theme) => theme)}>
			{children}
		</ThemeProvider>
	)
}