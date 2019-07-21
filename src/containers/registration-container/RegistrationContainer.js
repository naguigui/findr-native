import React, { useState } from 'react'
import { useMutation } from 'react-apollo-hooks'

import Layout from '../../components/layout'
import Registration from '../../components/registration'

import navigationService from '../../services/navigationService'

import { LOGIN_ROUTE } from '../../utils/routeNames'
import { apolloErrorStrip } from '../../utils/graphQLErrorHelpers'
import { showToast } from '../../utils/showToast'

import { REGISTRATION_MUTATION } from './gql'

const navigateToLogin = () => {
	navigationService.navigate({
		routeName: LOGIN_ROUTE,
	})
}

const RegistrationContainer = () => {
	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
		password: '',
	})

	const [registrationAction, { loading }] = useMutation(REGISTRATION_MUTATION, {
		variables: {
			name: formValues.name,
			email: formValues.email,
			password: formValues.password,
		},
	})

	const onSubmit = async () => {
		try {
			await registrationAction()
			navigationService.navigate({
				routeName: LOGIN_ROUTE,
			})
		} catch (err) {
			showToast({
				message: apolloErrorStrip(err.message),
			})
		}
	}

	const onChange = (name, value) => {
		setFormValues({
			...formValues,
			[name]: value,
		})
	}

	return (
		<Layout isLoading={loading}>
			<Registration
				name={formValues.name}
				email={formValues.email}
				password={formValues.password}
				onChange={onChange}
				onSubmit={onSubmit}
				navigateToLogin={navigateToLogin}
			/>
		</Layout>
	)
}

export default RegistrationContainer
