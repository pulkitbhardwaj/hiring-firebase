import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createUseStyles, ThemeProvider } from 'react-jss'
import Header from './components/Header'
import App from './app'

const useStyles = createUseStyles({
	'@global': {
		'*': {
			margin: 0,
			padding: 0
		},
		body: {
			fontFamily:
				'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
			'-webkit-font-smoothing': 'antialiased',
			'-moz-osx-font-smoothing': 'grayscale'
		},
		code: {
			fontFamily:
				'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace'
		}
	},
	dashboard: {
		height: '100vh',
		width: '100%'
	}
})

const Dashboard = () => {
	const styles = useStyles()

	return (
		<div className={styles.dashboard}>
			<Router>
				<ThemeProvider theme={{}}>
					<Header />
					<App />
				</ThemeProvider>
			</Router>
		</div>
	)
}

export default Dashboard
