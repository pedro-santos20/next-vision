import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import { SearchBar } from './SearchBar'
import { LivroForm } from './LivroForm'

const Container = styled.div`
	width: 80%;
	margin: 0 auto;
	padding: 20px;
	background-color: #f7f7f7;
	border-radius: 8px;
`

const Title = styled.h1`
	text-align: center;
	color: #333;
`

const BookList = styled.ul`
	list-style-type: none;
	padding: 0;
`

const BookItem = styled.li`
	background-color: #fff;
	margin-bottom: 20px;
	padding: 15px;
	border-radius: 5px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const BookTitle = styled.h3`
	color: #e74c3c;
`

const BookDetails = styled.p`
	margin: 5px 0;
	color: #555;
`

export const LivroList = () => {
	const [livros, setLivros] = useState([])
	const [searchQuery, setSearchQuery] = useState('')
	const [authTokens, setAuthTokens] = useState(() => {
		return JSON.parse(localStorage.getItem('authTokens')) || null
	})

	useEffect(() => {
		const fetchLivros = async () => {
			try {
				const response = await axios.get('http://localhost:8000/api/livros/')
				setLivros(response.data)
			} catch (error) {
				console.error('Erro ao buscar livros:', error)
			}
		}
		fetchLivros()
	}, [])

	const filteredLivros = livros.filter(
		(livro) =>
			livro.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
			livro.autor.toLowerCase().includes(searchQuery.toLowerCase())
	)

	return (
		<Container>
			<Title>Lista de Livros</Title>
			<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			<BookList>
				{filteredLivros.map((livro) => (
					<BookItem key={livro.id}>
						<BookTitle>{livro.titulo}</BookTitle>
						<BookDetails>Autor: {livro.autor}</BookDetails>
						<BookDetails>
							Data de Publicação: {livro.data_publicacao}
						</BookDetails>
						<BookDetails>
							Cópias Disponíveis: {livro.copias_disponiveis}
						</BookDetails>
						<LivroForm livro={livro} authTokens={authTokens} />
					</BookItem>
				))}
			</BookList>
		</Container>
	)
}
