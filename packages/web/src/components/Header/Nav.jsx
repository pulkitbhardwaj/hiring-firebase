import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	nav: ({ width }) => ({
		width: width
	}),
	menu: ({ direction }) => ({
		width: '100%',
		display: 'flex',
		flexDirection: direction,
		alighItems: 'center',
		justifyContent: 'space-evenly'
	}),
	menuItem: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		listStyle: 'none',
		width: '100%'
	}
})

const Nav = ({
	width = '100%',
	direction = 'row',
	children,
	className,
	...props
}) => {
	const styles = useStyles({ width, direction })

	return (
		<nav className={`${styles.nav} ${className}`} {...props}>
			<ul className={styles.menu}>
				{children.map(child => (
					<li className={styles.menuItem}>{child}</li>
				))}
			</ul>
		</nav>
	)
}

export default Nav
