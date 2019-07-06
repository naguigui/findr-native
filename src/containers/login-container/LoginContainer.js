import React, { useState, useEffect } from 'react'
import { Mutation } from 'react-apollo'

import Layout from '../../components/layout'
import Login from '../../components/login'

import { LOGIN_MUTATION } from '../../graphql/mutations/authMutations'
import navigationService from '../../services/navigationService'
import AuthService from '../../services/authService'

import { usePrevious } from '../../hooks'

const LoginContainer = (props) => {
	const { loginAction, isLoading } = props

	const [formValues, setFormValues] = useState({
		email: '',
		password: '',
	})

	const prevLoading = usePrevious(isLoading)

	useEffect(() => {
		if (prevLoading && !isLoading) {
			navigationService.navigate({
				routeName: 'App',
			})
		}
	}, [isLoading])

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
			}}
		>
			{(loginAction, { loading, data, error }) => (
				<LoginContainer
					mutationData={data}
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
