import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { useParams, use } from 'react-router-dom'

const useStyles = createUseStyles({
	searchBar: {}
})

export const useSearch = initialValue => {}

const Search = () => {
	const { searchBar } = useStyles()
	const { query } = useParams()
	const [search, setSearch] = useState(query)

	return (
		<form className={searchBar} method="GET" action="/">
			<input
				type="text"
				name="s"
				value={search}
				onChange={event => setSearch(event.target.value)}
			/>
			<button type="submit">Search</button>
			<p>{search}</p>
		</form>
	)
}

export default Search
