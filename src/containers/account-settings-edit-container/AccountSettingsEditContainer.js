import React, { useState } from 'react'
import { Query, Mutation } from 'react-apollo'
import { Layout, AccountSettingsEdit } from '../../components'
import { GET_USER_QUERY, UPDATE_USER_MUTATION } from './gql'

import { showToast } from '../../utils/showToast'

const AccountSettingsEditCounter = (props) => {
	const {
		queryIsLoading,
		queryData,
		mutationIsLoading,
		updateUserMutation,
	} = props

	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
	})

	const updateUser = () => {
		updateUserMutation({
			variables: {
				name: formValues.name,
			},
		})
	}

	const onChange = (name, value) => {
		setFormValues({
			...formValues,
			[name]: value,
		})
	}

	return (
		<Layout isAuthenticated isLoading={queryIsLoading || mutationIsLoading}>
			{queryData && queryData.user && (
				<AccountSettingsEdit
					nameValue={formValues.name}
					emailValue={formValues.email}
					onChange={onChange}
					namePlaceholder={queryData.user.name}
					emailPlaceholder={queryData.user.email}
					updateUser={updateUser}
				/>
			)}
		</Layout>
	)
}

const AccountSettingsEditCounterWithQuery = (props) => (
	<Query query={GET_USER_QUERY}>
		{({ loading: queryLoading, data: queryData }) => (
			<Mutation
				mutation={UPDATE_USER_MUTATION}
				onCompleted={() => {
					showToast({
						message: 'Account successfully updated.',
					})
				}}
			>
				{(updateUserMutation, { loading: mutationLoading }) => (
					<AccountSettingsEditCounter
						queryData={queryData}
						queryIsLoading={queryLoading}
						mutationIsLoading={mutationLoading}
						updateUserMutation={updateUserMutation}
						{...props}
					/>
				)}
			</Mutation>
		)}
	</Query>
)

export default AccountSettingsEditCounterWithQuery
