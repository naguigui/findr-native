import React, { useEffect } from 'react'
import { isEmpty } from 'lodash'
import { useQuery } from 'react-apollo-hooks'
import { Home, Layout } from '../../components'
import { GET_USER_QUERY } from './gql'

import { usePrevious } from '../../hooks'
import navigationService from '../../services/navigationService'

import * as Routes from '../../utils/routeNames'

const HomeContainer = (props) => {
	const { navigation } = props
	const { data, loading } = useQuery(GET_USER_QUERY)

	const prevUser = usePrevious(data)

	useEffect(() => {
		if (isEmpty(prevUser) && !isEmpty(data)) {
			navigation.setParams({
				subtitle: data.user.name,
			})
			if (!isEmpty(data.user.room)) {
				navigationService.replace({
					routeName: Routes.PARTY_ROUTE,
				})
			}
		}
	}, [data])

	return (
		<Layout isAuthenticated isLoading={loading}>
			{data && data.user && (
				<Home
					name={data.user.name}
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

export default HomeContainer
