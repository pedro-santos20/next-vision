import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
	width: 100%;
	max-width: 400px;
	margin: 100px auto;
	padding: 20px;
	border-radius: 8px;
	background-color: #f7f7f7;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
	margin-bottom: 20px;
	text-align: center;
	color: #333;
`

const Input = styled.input`
	width: 100%;
	padding: 10px;
	margin-bottom: 15px;
	border-radius: 4px;
	border: 1px solid #ddd;
	font-size: 16px;
`

const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: #e74c3c;
	color: #fff;
	border: none;
	border-radius: 4px;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		background-color: #c0392b;
	}
`

export const Login = ({ setAuthTokens }) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const response = await axios.post('http://localhost:8000/api/token/', {
				username,
				password,
			})
			setAuthTokens(response.data)
			localStorage.setItem('authTokens', JSON.stringify(response.data))
			alert('Login bem-sucedido!')
		} catch (error) {
			console.error('Erro ao fazer login:', error)
			alert('Login falhou. Verifique suas credenciais.')
		}
	}

	return (
		<Container>
			<Title>Login</Title>
			<form onSubmit={handleSubmit}>
				<Input
					type='text'
					placeholder='Nome do usuário'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
				/>
				<Input
					type='password'
					placeholder='Senha'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<Button type='submit'>Entrar</Button>
			</form>
		</Container>
	)
}
