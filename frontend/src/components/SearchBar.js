import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
	width: 98%;
	padding: 10px;
	margin-bottom: 20px;
	border-radius: 4px;
	border: 1px solid #ddd;
	font-size: 16px;
`

export const SearchBar = ({ searchQuery, setSearchQuery }) => {
	return (
		<Input
			type='text'
			placeholder='Buscar por título ou autor'
			value={searchQuery}
			onChange={(e) => {
				setSearchQuery(e.target.value)
				console.log(e.target.value)
			}}
		/>
	)
}
