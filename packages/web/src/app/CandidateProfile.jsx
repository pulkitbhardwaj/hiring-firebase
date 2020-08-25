import React from 'react'
import { useParams } from 'react-router-dom'

const CandidateProfile = () => {
	const { id } = useParams()

	return (
		<div>
			<h1>Candidate Profile number {id}</h1>
		</div>
	)
}

export default CandidateProfile
