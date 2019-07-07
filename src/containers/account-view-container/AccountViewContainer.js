import React, { useEffect, useState } from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { isEmpty } from 'lodash'

import { AccountHero, ListItem, Layout } from '../../components'

import AuthService from '../../services/authService'
import navigationService from '../../services/navigationService'

import { resetCache } from '../../graphql/client'

import { usePrevious } from '../../hooks'

import * as S from './AccountViewContainer.styled'

const GET_USER_QUERY_CACHE = gql`
	{
		user @client {
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
	const { queryData } = props

	const [name, setName] = useState('')
	const prevQueryData = usePrevious(queryData)

	useEffect(() => {
		if (isEmpty(prevQueryData) && !isEmpty(queryData)) {
			setName(queryData.user.name)
		}
	}, [queryData])

	const logout = async () => {
		await AuthService.deauthenticate()
		resetCache()
		navigationService.navigate({
			routeName: 'Auth',
		})
	}

	return (
		<Layout isAuthenticated={true}>
			<S.AccountHeroWrapper>
				<AccountHero name={name} />
			</S.AccountHeroWrapper>
			<ListItem label="Log out" onPress={logout} />
		</Layout>
	)
}

const AccountViewContainerWithQuery = (props) => {
	return (
		<Query query={GET_USER_QUERY_CACHE}>
			{({ loading, data }) => {
				return (
					<AccountViewContainer
						queryData={data}
						isLoading={loading}
						{...props}
					/>
				)
			}}
		</Query>
	)
}

export default AccountViewContainerWithQuery
