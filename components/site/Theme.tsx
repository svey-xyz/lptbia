"use client";
import { Functions } from '@/lib/mathFunctions';
import { ThemeProvider, useTheme } from 'next-themes'
import React, { ReactNode, useEffect, useState } from 'react';
import { getCurrent } from '@lib/server/weather'
import { CurrentWeather } from 'openweather-api-node';

type themeLiteral = 'current'| 'clearNight' | 'cloudyNight' | 'clearDay' | 'cloudyDay'

export const themes = ['current', 'clearNight', 'cloudyNight', 'clearDay', 'cloudyDay'] as const


export default function ThemeHandler({
	children
}: {
	children: ReactNode
}) {
	const [height, setHeight] = useState<number>()
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme, resolvedTheme } = useTheme()

	useEffect(() => {
		setMounted(true);
		if (mounted) return
		if (!theme || !themes.includes(theme as themeLiteral)) setTheme(themes[0])

		dynamicThemeMapping();
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
		<ThemeProvider attribute="class" enableSystem={false} defaultTheme="cloudyDay"
			themes={themes.map((theme) => theme)}>
			{children}
		</ThemeProvider>
	)
}

function dynamicThemeMapping() {
	const curWeather = getCurrent().then((data : CurrentWeather) => {
		console.log(data)
		const sunrise = Functions.round(data.astronomical.sunrise.getHours() * 60 + data.astronomical.sunrise.getMinutes(), 0)
		const sunset = Functions.round(data.astronomical.sunset.getHours() * 60 + data.astronomical.sunset.getMinutes(), 0)
		const sunCur = Functions.round(data.dt.getHours() * 60 + data.dt.getMinutes(), 0)

		const daylight = Functions.round(Math.sin((Math.PI * (sunCur - sunrise)) / (sunset - sunrise)), 3)

		const luminanceModifier = Functions.clamp(daylight * 100, 10, 100)
		const saturationModifier = 100 - data.weather.clouds / 2

		applyStyle('.current',
			`.current {
			--primary-bg: 203deg ${saturationModifier}% ${luminanceModifier}%;
			--secondary-bg: 203deg ${saturationModifier}% ${luminanceModifier / 2}%;

		}`)
	}); 	
}

function applyStyle(cssClass:string, style:string) {
	const styleSheets = document.styleSheets

	let styleSheet: CSSStyleSheet | undefined
	let classIndex: number | undefined

	for (let i = 0; i < styleSheets.length; i++) {
		const cssRules = Array.from(styleSheets[i].cssRules);
		const currentClassIndex = cssRules.findIndex(cssRule => (cssRule as any).selectorText === cssClass)
		if (currentClassIndex !== -1) {
			styleSheet = styleSheets[i];
			classIndex = currentClassIndex
		}
	}
	if (!classIndex) throw new Error('Class index not found!')
	if (!styleSheet) throw new Error('No stylesheet found!')

	styleSheet.deleteRule(classIndex);
	styleSheet.insertRule(style, classIndex)
}