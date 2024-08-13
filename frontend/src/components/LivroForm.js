import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const FormContainer = styled.form`
	background-color: #f7f7f7;
	padding: 20px;
	margin-top: 20px;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Title = styled.h4`
	color: #333;
	margin-bottom: 15px;
`

const Input = styled.input`
	width: 98%;
	padding: 10px;
	margin-bottom: 15px;
	border-radius: 4px;
	border: 1px solid #ddd;
	font-size: 16px;
`

const Button = styled.button`
	padding: 10px 15px;
	background-color: #e74c3c;
	color: #fff;
	border: none;
	border-radius: 4px;
	font-size: 16px;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: #c0392b;
	}
`

export const LivroForm = ({ livro, authTokens }) => {
	const [usuario, setUsuario] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()
		const emprestimo = { livro: livro.id, usuario }
		try {
			const response = await axios.post(
				'http://localhost:8000/api/emprestimos/',
				emprestimo,
				{
					headers: {
						Authorization: `Bearer ${authTokens.access}`,
					},
				}
			)
			console.log('Resposta da API:', response.data)
			alert('Empréstimo registrado com sucesso!')
		} catch (error) {
			console.error('Erro ao registrar empréstimo:', error.response || error)
			alert('Erro ao registrar o empréstimo. Verifique os dados.')
		}
	}

	return (
		<FormContainer onSubmit={handleSubmit}>
			<Title>Registrar Empréstimo para {livro.titulo}</Title>
			<Input
				type='text'
				placeholder='Nome do usuário'
				value={usuario}
				onChange={(e) => setUsuario(e.target.value)}
				required
			/>
			<Button type='submit'>Registrar Empréstimo</Button>
		</FormContainer>
	)
}
