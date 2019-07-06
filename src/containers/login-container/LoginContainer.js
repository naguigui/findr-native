import React, { useState, useEffect } from 'react'
import { Mutation } from 'react-apollo'

import Layout from '../../components/layout'
import Login from '../../components/login'

import { LOGIN_MUTATION } from '../../graphql/mutations/authMutations'
import navigationService from '../../services/navigationService'
import AuthService from '../../services/authService'

const LoginContainer = (props) => {
	const { loginAction, isLoading } = props

	const [formValues, setFormValues] = useState({
		email: '',
		password: '',
	})

	const onChange = (name, value) => {
		setFormValues({
			...formValues,
			[name]: value,
		})
	}

	const onSubmit = () => {
		loginAction({
			variables: {
				email: formValues.email,
				password: formValues.password,
			},
		})
	}

	const navigateToRegistration = () => {
		navigationService.navigate({
			routeName: 'Registration',
		})
	}

	return (
		<Layout isLoading={isLoading}>
			<Login
				email={formValues.email}
				password={formValues.password}
				onChange={onChange}
				onSubmit={onSubmit}
				navigateToRegistration={navigateToRegistration}
			/>
		</Layout>
	)
}

const LoginContainerWithMutation = (props) => {
	return (
		<Mutation
			mutation={LOGIN_MUTATION}
			onCompleted={async (data) => {
				const { accessToken } = data.login
				await AuthService.authenticate(accessToken)
				navigationService.navigate({
					routeName: 'App',
				})
			}}
		>
			{(loginAction, { loading, error }) => (
				<LoginContainer
					loginAction={loginAction}
					isLoading={loading}
					error={error}
					{...props}
				/>
			)}
		</Mutation>
	)
}

export default LoginContainerWithMutation
