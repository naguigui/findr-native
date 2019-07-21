import React, { useState } from 'react'
import { useMutation } from 'react-apollo-hooks'

import Layout from '../../components/layout'
import Login from '../../components/login'

import navigationService from '../../services/navigationService'
import AuthService from '../../services/authService'

import { apolloErrorStrip } from '../../utils/graphQLErrorHelpers'
import { showToast } from '../../utils/showToast'

import { LOGIN_MUTATION } from './gql'

const LoginContainer = () => {
	const [formValues, setFormValues] = useState({
		email: '',
		password: '',
	})

	const [loginAction, { loading }] = useMutation(LOGIN_MUTATION, {
		variables: {
			email: formValues.email,
			password: formValues.password,
		},
	})

	const onChange = (name, value) => {
		setFormValues({
			...formValues,
			[name]: value,
		})
	}

	const onSubmit = async () => {
		try {
			const {
				data: {
					login: { accessToken },
				},
			} = await loginAction()
			await AuthService.authenticate(accessToken)
			navigationService.navigate({
				routeName: 'App',
			})
		} catch (err) {
			showToast({
				message: apolloErrorStrip(err.message),
			})
		}
	}

	const navigateToRegistration = () => {
		navigationService.navigate({
			routeName: 'Registration',
		})
	}

	return (
		<Layout isLoading={loading}>
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

export default LoginContainer
