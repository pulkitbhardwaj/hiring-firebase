import React from 'react'
import { createUseStyles } from 'react-jss'
import MenuBar from './MenuBar'
import Logo from './Logo'
import Search from '../search'

const useStyles = createUseStyles({
	header: {
		height: '10vh',
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	}
})

const Header = () => {
	const { header } = useStyles()

	return (
		<div className={header}>
			<MenuBar />
			<Logo />
			<Search />
		</div>
	)
}

export default Header
