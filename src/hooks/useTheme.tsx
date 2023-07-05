import { useEffect, useState } from 'react'
import useDarkMode from 'use-dark-mode'

const lightTheme = 'light-mode'
const darkTheme = 'dark-mode'

const useTheme = () => {
	const darkMode = useDarkMode()
	const [theme, setTheme] = useState<string>(darkTheme)

	useEffect(() => {
		setTheme(darkMode.value ? darkTheme : lightTheme)
	}, [darkMode, darkMode.value])

	return theme
}

export default useTheme
