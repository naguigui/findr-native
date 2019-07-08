import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { isEmpty } from 'lodash'
import { Layout, AccountSettingsEdit } from '../../components'

const GET_USER_QUERY = gql`
	{
		user {
			name
			email
		}
	}
`

const AccountSettingsEditCounter = (props) => {
	const { isLoading, queryData } = props
	const [formValues, setFormValues] = useState({
		name: '',
		email: '',
	})

	const onChange = (name, value) => {
		setFormValues({
			...formValues,
			[name]: value,
		})
	}
	return (
		<Layout isAuthenticated>
			{!isLoading && !isEmpty(queryData) && (
				<AccountSettingsEdit
					nameValue={formValues.name}
					emailValue={formValues.email}
					onChange={onChange}
					namePlaceholder={queryData.user.name}
					emailPlaceholder={queryData.user.email}
				/>
			)}
		</Layout>
	)
}

const AccountSettingsEditCounterWithQuery = (props) => (
	<Query query={GET_USER_QUERY}>
		{({ loading, data }) => (
			<AccountSettingsEditCounter
				queryData={data}
				isLoading={loading}
				{...props}
			/>
		)}
	</Query>
)

export default AccountSettingsEditCounterWithQuery
