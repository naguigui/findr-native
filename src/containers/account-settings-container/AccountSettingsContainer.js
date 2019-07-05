import React, { useEffect, useRef } from 'react'
import { Query } from 'react-apollo'
import { Text, View } from 'react-native'
import { isEmpty } from 'lodash'

import Layout from '../../components/layout'

import { GET_USER } from '../../graphql/queries/userQueries'

const usePrevious = (value) => {
	const ref = useRef()
	useEffect(() => {
		ref.current = value
	})
	return ref.current
}

const AccountSettingsContainer = (props) => {
	const { navigation, queryData } = props
	const prevQueryData = usePrevious(queryData)

	useEffect(() => {
		if (isEmpty(prevQueryData) && !isEmpty(queryData)) {
			navigation.setParams({ title: queryData.user.name })
		}
	}, [queryData])

	return (
		<Layout>
			<View>
				<Text>Account Settings</Text>
			</View>
		</Layout>
	)
}

const AccountSettingsContainerWithQuery = (props) => {
	return (
		<Query query={GET_USER}>
			{({ loading, data }) => {
				return (
					<AccountSettingsContainer
						queryData={data}
						isLoading={loading}
						{...props}
					/>
				)
			}}
		</Query>
	)
}

export default AccountSettingsContainerWithQuery
