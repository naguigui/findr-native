import React, { useEffect } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { isEmpty } from 'lodash'

import { AccountView, Layout } from '../../components'

import AuthService from '../../services/authService'
import navigationService from '../../services/navigationService'

import { resetCache } from '../../graphql/client'
import * as Routes from '../../utils/routeNames'

const GET_USER_QUERY = gql`
	{
		user {
			name
			room {
				_id
				sessionStarted
				name
			}
		}
	}
`

const GET_USER_SUBSCRIPTION = gql`
	subscription {
		userUpdated {
			name
			room {
				_id
				sessionStarted
				name
			}
		}
	}
`

const AccountViewContainer = (props) => {
	const { queryData, subscribeToMore, isLoading } = props

	useEffect(() => {
		subscribeToMore({
			document: GET_USER_SUBSCRIPTION,
			updateQuery: (prev, { subscriptionData }) => {
				if (!subscriptionData.data) return prev

				const userData = subscriptionData.data.userUpdated

				return Object.assign({}, prev, {
					user: {
						...userData,
					},
				})
			},
		})
	}, [])

	const logout = async () => {
		await AuthService.deauthenticate()
		resetCache()
		navigationService.navigate({
			routeName: Routes.AUTH_ROUTE,
		})
	}

	return (
		<Layout isAuthenticated={true} isLoading={isLoading}>
			{!isEmpty(queryData) && (
				<AccountView
					logout={logout}
					name={queryData.user.name}
					navigateToAccountSettingsEdit={() =>
						navigationService.navigate({
							routeName: Routes.ACCOUNT_SETTINGS_EDIT_ROUTE,
						})
					}
				/>
			)}
		</Layout>
	)
}

const AccountViewContainerWithQuery = (props) => (
	<Query query={GET_USER_QUERY} fetchPolicy="network-only">
		{({ loading, data, subscribeToMore }) => (
			<AccountViewContainer
				queryData={data}
				isLoading={loading}
				subscribeToMore={subscribeToMore}
				{...props}
			/>
		)}
	</Query>
)

export default AccountViewContainerWithQuery
