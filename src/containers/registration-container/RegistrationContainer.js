import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity } from 'react-native'
import { Mutation } from 'react-apollo'

import Layout from '../../components/layout'

import { REGISTRATION_MUTATION } from '../../graphql/mutations/registrationMutation'

const RegistrationContainer = (props) => {
	const { registrationAction } = props

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

	return (
		<Layout>
			<Text>Name</Text>
			<TextInput
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				onChangeText={(text) => onChange('name', text)}
				value={formValues.name}
			/>
			<Text>Email</Text>
			<TextInput
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				onChangeText={(text) => onChange('email', text)}
				value={formValues.email}
			/>
			<Text>Password</Text>
			<TextInput
				style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
				onChangeText={(text) => onChange('password', text)}
				value={formValues.password}
				secureTextEntry
			/>
			<TouchableOpacity
				style={{ height: 100, borderWidth: 1, borderColor: 'black' }}
				onPress={() =>
					registrationAction({
						variables: {
							name: formValues.name,
							email: formValues.email,
							password: formValues.password,
						},
					})
				}
			>
				<Text>Register</Text>
			</TouchableOpacity>
		</Layout>
	)
}

const RegistrationContainerWithMutation = (props) => {
	return (
		<Mutation mutation={REGISTRATION_MUTATION}>
			{(registrationAction, { data }) => (
				<RegistrationContainer
					data={data}
					registrationAction={registrationAction}
					{...props}
				/>
			)}
		</Mutation>
	)
}

export default RegistrationContainerWithMutation
