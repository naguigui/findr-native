import React from 'react'
import { useQuery } from 'react-apollo-hooks'

import { AccountView, Layout } from '../../components'

import AuthService from '../../services/authService'
import navigationService from '../../services/navigationService'

import { resetCache } from '../../graphql/client'
import { GET_USER_QUERY } from './gql'
import * as Routes from '../../utils/routeNames'

const AccountViewContainer = () => {
	const { data, loading } = useQuery(GET_USER_QUERY)

	const logout = async () => {
		await AuthService.deauthenticate()
		resetCache()
		navigationService.navigate({
			routeName: Routes.AUTH_ROUTE,
		})
	}

	return (
		<Layout isAuthenticated={true} isLoading={loading}>
			{data && data.user && (
				<AccountView
					logout={logout}
					name={data.user.name}
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

export default AccountViewContainer
