import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import Sidebar from '../components/Sidebar'
import CandidateProfile from './CandidateProfile'

const useStyles = createUseStyles({
	app: {
		height: '90vh',
		width: '100%',
		display: 'flex',
		alignItems: 'stretch',
		justifyContent: 'flex-start'
	}
})

const App = () => {
	const { app } = useStyles()

	return (
		<div className={app}>
			<Sidebar />
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
				<Route path="/?s=:query">
					<h2>Rest</h2>
				</Route>
			</Switch>
		</div>
	)
}

export default App
