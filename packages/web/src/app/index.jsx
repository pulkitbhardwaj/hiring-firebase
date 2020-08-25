import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
import CandidateProfile from './CandidateProfile'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
	'@global': {
		'*': {
			margin: 0
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
	app: {
		height: '100vh',
		width: '100%'
	}
})

const App = () => {
	const styles = useStyles()

	return (
		<div className={styles.app}>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<h2>Home Page</h2>
					</Route>
					<Route exact path="/blog">
						<h2>Blog Page</h2>
					</Route>
					<Route exact path="/signup">
						<h2>signup page</h2>
					</Route>
					<Route path="/profile/:id">
						<CandidateProfile />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
