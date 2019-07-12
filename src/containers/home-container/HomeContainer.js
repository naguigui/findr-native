import React, { useEffect } from 'react'
import { isEmpty } from 'lodash'
import { Query } from 'react-apollo'
import { Home, Layout } from '../../components'
import { GET_USER_QUERY, GET_USER_SUBSCRIPTION } from './gql'

import { usePrevious } from '../../hooks'
import navigationService from '../../services/navigationService'

import * as Routes from '../../utils/routeNames'

const HomeContainer = (props) => {
	const {
		queryData: { user },
		navigation,
		subscribeToMore,
		isLoading,
	} = props

	const prevUser = usePrevious(user)

	useEffect(() => {
		if (isEmpty(prevUser) && !isEmpty(user)) {
			navigation.setParams({
				subtitle: user.name,
			})
			if (!isEmpty(user.room)) {
				navigationService.replace({
					routeName: Routes.PARTY_ROUTE,
				})
			}
		}

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
	}, [user])

	return (
		<Layout isAuthenticated isLoading={isLoading}>
			{user && (
				<Home
					name={user.name}
					onCreateRoom={() => {
						navigationService.navigate({
							routeName: Routes.CREATE_ROOM_ROUTE,
						})
					}}
					onJoinRoom={() => {
						navigationService.navigate({
							routeName: Routes.JOIN_PARTY_ROUTE,
						})
					}}
				/>
			)}
		</Layout>
	)
}

const HomeContainerWithQuery = (props) => (
	<Query query={GET_USER_QUERY}>
		{({ loading, data, subscribeToMore }) => (
			<HomeContainer
				queryData={data}
				isLoading={loading}
				subscribeToMore={subscribeToMore}
				{...props}
			/>
		)}
	</Query>
)

export default HomeContainerWithQuery
