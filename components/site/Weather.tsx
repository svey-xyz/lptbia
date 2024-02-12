'use client';

import React, { useState, useEffect } from "react";
import { CurrentWeather } from 'openweather-api-node'
import { getCurrent } from "@/lib/server/weather";

export default function Weather() {
	const [weatherData, setWeatherData] = useState<CurrentWeather>()
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		const weatherData = getCurrent()

		const curWeather = weatherData.then((data) => {
			setWeatherData(data)
			setLoading(false)
		}); 
	}, [])

	if (isLoading) return <div className="flex flex-row font-bold text-sm space-x-3 whitespace-nowrap">Loading Weather...</div>
	if (!weatherData) return <div className="flex flex-row font-bold text-sm space-x-3">No Weather Data Found</div>

	

	const curTemp = Math.round(weatherData.weather.temp.cur);
	const curWindSpeed = Math.round(weatherData.weather.wind.speed);
	const curWeatherDesc = weatherData.weather.description;

	return (
		<div className="flex flex-row font-bold text-sm gap-x-3">
			<span>{curTemp}°</span>
			<span className="inline-block whitespace-nowrap uppercase">{curWeatherDesc}</span>
			<span >{curWindSpeed}m/s</span>
		</div>
	)
}
