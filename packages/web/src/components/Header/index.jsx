import React from 'react'
import Nav from './Nav'
import { NavLink } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import MenuBar from './MenuBar'
import Logo from './Logo'

const useStyles = createUseStyles({
	header: {
		height: 80,
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'stretch'
	},
	navLink: {
		textDecoration: 'none',
		padding: [10, 50],
		backgroundColor: 'red',
		color: 'white'
	},
	navLinkActive: {
		backgroundColor: 'blue'
	}
})

const Header = () => {
	const styles = useStyles()

	return (
		<div className={styles.header}>
			<MenuBar />
			<Logo />
			<Nav width="50%" direction="row">
				<NavLink
					className={styles.navLink}
					activeClassName={styles.navLinkActive}
					exact
					to="/">
					Home
				</NavLink>
				<NavLink
					className={styles.navLink}
					activeClassName={styles.navLinkActive}
					to="/blog">
					Blog
				</NavLink>
				<NavLink
					className={styles.navLink}
					activeClassName={styles.navLinkActive}
					to="/signup">
					SignUp
				</NavLink>
				<NavLink
					className={styles.navLink}
					activeClassName={styles.navLinkActive}
					to="/profile/3">
					Profile
				</NavLink>
			</Nav>
		</div>
	)
}

export default Header
