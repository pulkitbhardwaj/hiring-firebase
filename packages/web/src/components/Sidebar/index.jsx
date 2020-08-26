import React from 'react'
import { createUseStyles } from 'react-jss'
import Nav from '../Nav'
import { NavLink } from 'react-router-dom'

const useStyles = createUseStyles({
	sidebar: ({ width }) => ({
		width: width,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		backgroundColor: 'whitesmoke'
	}),
	navLink: {
		textDecoration: 'none',
		padding: [10, 50],
		width: '100%'
	},
	navLinkActive: {
		backgroundColor: 'blue',
		color: 'white'
	}
})

const Sidebar = ({ width = '25%' }) => {
	const { sidebar, navLink, navLinkActive } = useStyles({ width })

	return (
		<div className={sidebar}>
			<Nav direction="column">
				<NavLink
					className={navLink}
					activeClassName={navLinkActive}
					exact
					to="/">
					Home
				</NavLink>
				<NavLink className={navLink} activeClassName={navLinkActive} to="/blog">
					Blog
				</NavLink>
				<NavLink
					className={navLink}
					activeClassName={navLinkActive}
					to="/signup">
					SignUp
				</NavLink>
				<NavLink
					className={navLink}
					activeClassName={navLinkActive}
					to="/profile/3">
					Profile
				</NavLink>
			</Nav>
		</div>
	)
}

export default Sidebar
