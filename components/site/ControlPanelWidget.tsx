import React from "react"
import Weather from '@components/site/Weather'
import ThemeButton from '@components/site/ThemeButton'
import ThemeDeclaration from '@components/site/ThemeDeclaration'



function ControlPanelWidget() {
	return (
		<div className="flex flex-row gap-x-2 items-center">
			<div className='flex flex-col xl:flex-row items-start gap-x-2'>
				<Weather />
				<ThemeDeclaration />
			</div>
			<ThemeButton />
		</div>
	)
}

export default  ControlPanelWidget