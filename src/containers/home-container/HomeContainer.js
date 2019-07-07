import React, { useEffect } from 'react'
import { isEmpty } from 'lodash'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { Home, Layout } from '../../components'

import { usePrevious } from '../../hooks'
import navigationService from '../../services/navigationService'

import * as Routes from '../../utils/routeNames'

import * as S from './HomeContainer.styled'

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

const HomeContainer = (props) => {
	const {
		queryData: { user },
		isLoading,
		navigation,
	} = props
	const prevUser = usePrevious(user)

	useEffect(() => {
		if (isEmpty(prevUser) && !isEmpty(user)) {
			navigation.setParams({
				subtitle: user.name,
			})
		}
	}, [user])

	return (
		<Layout isAuthenticated>
			<>
				{isLoading && <S.LoadingText>Loading...</S.LoadingText>}
				{!isLoading && user && isEmpty(user.room) && (
					<Home
						onCreateRoom={() =>
							navigationService.navigate({
								routeName: Routes.CREATE_ROOM_ROUTE,
							})
						}
						onJoinRoom={() => {}}
					/>
				)}
			</>
		</Layout>
	)
}

const HomeContainerWithQuery = (props) => {
	return (
		<Query query={GET_USER_QUERY}>
			{({ loading, data }) => {
				return <HomeContainer queryData={data} isLoading={loading} {...props} />
			}}
		</Query>
	)
}

export default HomeContainerWithQuery
