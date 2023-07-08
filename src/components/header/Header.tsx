import './Header.scss'
import React from 'react'
import ThemeBtn from '../themeBtn/ThemeBtn'

const Header: React.FC = () => {
	return (
		<header>
			<span id='title'>Where in the World?</span>
			<ThemeBtn />
		</header>
	)
}

export default Header
