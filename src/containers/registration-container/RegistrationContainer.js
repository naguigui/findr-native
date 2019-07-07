import React, { useState } from 'react'
import { Mutation } from 'react-apollo'

import Layout from '../../components/layout'
import Registration from '../../components/registration'

import { REGISTRATION_MUTATION } from '../../graphql/mutations/authMutations'
import navigationService from '../../services/navigationService'

import { LOGIN_ROUTE } from '../../utils/routeNames'

const navigateToLogin = () => {
	navigationService.navigate({
		routeName: LOGIN_ROUTE,
	})
}

const RegistrationContainer = (props) => {
	const { registrationAction, isLoading } = props

	const [formValues, setFormValues] = useState({
		name: '',
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
		registrationAction({
			variables: {
				name: formValues.name,
				email: formValues.email,
				password: formValues.password,
			},
		})
	}

	return (
		<Layout isLoading={isLoading}>
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

const RegistrationContainerWithMutation = (props) => {
	return (
		<Mutation mutation={REGISTRATION_MUTATION} onCompleted={navigateToLogin}>
			{(registrationAction, { loading, data }) => (
				<RegistrationContainer
					data={data}
					registrationAction={registrationAction}
					isLoading={loading}
					{...props}
				/>
			)}
		</Mutation>
	)
}

export default RegistrationContainerWithMutation
