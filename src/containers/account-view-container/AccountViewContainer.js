import React, { useEffect, useState } from 'react'
import { Query } from 'react-apollo'
import { isEmpty } from 'lodash'
import AccountHero from '../../components/account-hero'
import ListItem from '../../components/list-item'
import Layout from '../../components/layout'

import AuthService from '../../services/authService'
import navigationService from '../../services/navigationService'

import { GET_USER } from '../../graphql/queries/userQueries'
import { usePrevious } from '../../hooks'

import * as S from './AccountViewContainer.styled'

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
		<Query query={GET_USER}>
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
