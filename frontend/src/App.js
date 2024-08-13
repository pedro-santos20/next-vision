import React, { useState } from 'react'
import { LivroList } from './components/LivroList'
import { Login } from './components/Login'

export const App = () => {
	const [authTokens, setAuthTokens] = useState(() => {
		return JSON.parse(localStorage.getItem('authTokens')) || null
	})

	return (
		<div>
			{!authTokens ? (
				<Login setAuthTokens={setAuthTokens} />
			) : (
				<LivroList authTokens={authTokens} />
			)}
		</div>
	)
}
