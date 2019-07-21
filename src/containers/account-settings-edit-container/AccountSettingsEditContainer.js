import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-apollo-hooks'
import { Layout, AccountSettingsEdit } from '../../components'
import { GET_USER_QUERY, UPDATE_USER_MUTATION } from './gql'

import { showAlertDialog } from '../../utils/showAlertDialog'
import { showToast } from '../../utils/showToast'

const AccountSettingsEditContainer = () => {
	const {
		data: { user },
		loading: queryLoading,
	} = useQuery(GET_USER_QUERY)

	const [formValues, setFormValues] = useState({
		name: (user && user.name) || '',
		email: (user && user.email) || '',
	})

	const [updateUserAction, { loading: mutationLoading }] = useMutation(
		UPDATE_USER_MUTATION,
		{
			variables: {
				name: formValues.name,
			},
			update: (cache, response) => {
				const data = cache.readQuery({ query: GET_USER_QUERY })
				cache.writeQuery({
					query: GET_USER_QUERY,
					data: {
						user: {
							...data.user,
							...response.data.updateUser,
						},
					},
				})
			},
		},
	)

	const updateUser = async () => {
		await updateUserAction()
		showToast({
			message: 'Account successfully updated.',
		})
	}

	const onChange = (name, value) => {
		setFormValues({
			...formValues,
			[name]: value,
		})
	}

	const isLoading = mutationLoading || queryLoading

	return (
		<Layout isAuthenticated isLoading={isLoading}>
			{user && (
				<AccountSettingsEdit
					nameValue={formValues.name}
					emailValue={formValues.email}
					onChange={onChange}
					namePlaceholder={user.name}
					emailPlaceholder={user.email}
					updateUser={() =>
						showAlertDialog({
							alertTitle: 'Update account settings',
							alertMessage: 'Are you sure about these changes?',
							onApprove: updateUser,
						})
					}
				/>
			)}
		</Layout>
	)
}

export default AccountSettingsEditContainer
