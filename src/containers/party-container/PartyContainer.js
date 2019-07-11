import React, { useEffect } from 'react'
import { Query } from 'react-apollo'
import { Layout, PartyList } from '../../components'
import { GET_USER, GET_USER_SUBSCRIPTION } from './gql'

const PartyContainer = (props) => {
	const { isLoading, queryData, refetch, subscribeToMore } = props

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

	return (
		<Layout isAuthenticated={true} isLoading={isLoading}>
			{queryData && queryData.user && queryData.user.room && (
				<PartyList
					party={queryData.user.room.party}
					roomName={queryData.user.room.name}
					isLoading={isLoading}
					refetch={refetch}
				/>
			)}
		</Layout>
	)
}

const PartyContainerWithQuery = (props) => (
	<Query query={GET_USER} fetchPolicy="network-only">
		{({ loading, data, refetch, subscribeToMore }) => (
			<PartyContainer
				queryData={data}
				isLoading={loading}
				refetch={refetch}
				subscribeToMore={subscribeToMore}
				{...props}
			/>
		)}
	</Query>
)

export default PartyContainerWithQuery
