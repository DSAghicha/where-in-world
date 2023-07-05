import React from 'react'
import useDarkMode from 'use-dark-mode'
import { useTheme } from '../../hooks'

const ThemeBtn: React.FC = () => {
	const getCurrentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
	const darkMode = useDarkMode(getCurrentTheme)
	const theme = useTheme()
	return (
		<button className='btnTheme' onClick={darkMode.toggle}>
			{theme === 'dark-mode' ? 'LM' : 'DM'}
		</button>
	)
}

export default ThemeBtn
