import React from 'react'
import useDarkMode from 'use-dark-mode'
import { useTheme } from '../../hooks'
import { DarkModeSvg, LightModeSvg } from '../../assets'

const ThemeBtn: React.FC = () => {
	const getCurrentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
	const darkMode = useDarkMode(getCurrentTheme)
	const theme = useTheme()
	return (
		<div className='btnTheme' onClick={darkMode.toggle}>
			{theme === 'dark-mode' ? <LightButton /> : <DarkButton />}
		</div>
	)
}

const LightButton: React.FC = () => {
	return (
		<>
			<LightModeSvg />
			<span className='buttonContent'>Light Mode</span>
		</>
	)
}

const DarkButton: React.FC = () => {
	return (
		<>
			<DarkModeSvg />
			<span className='buttonContent'>Dark Mode</span>
		</>
	)
}

export default ThemeBtn
