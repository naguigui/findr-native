import React, { useEffect } from 'react'
import { Query, Mutation } from 'react-apollo'
import { Layout, PartyList } from '../../components'
import { GET_USER, GET_USER_SUBSCRIPTION, UPDATE_USER_MUTATION } from './gql'

const PartyContainer = (props) => {
	const {
		updateUserMutation,
		queryIsLoading,
		mutationIsLoading,
		queryData,
		subscribeToMore,
	} = props

	const isLoading = queryIsLoading || mutationIsLoading

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

	const onReady = () => {
		updateUserMutation({
			variables: {
				isReady: !queryData.user.isReady,
			},
		})
	}

	return (
		<Layout isAuthenticated={true} isLoading={isLoading}>
			{queryData && queryData.user && queryData.user.room && (
				<PartyList
					party={queryData.user.room.party}
					roomName={queryData.user.room.name}
					roomOwner={queryData.user.room.roomOwner}
					onReady={onReady}
				/>
			)}
		</Layout>
	)
}

const PartyContainerWithQuery = (props) => (
	<Query query={GET_USER} fetchPolicy="network-only">
		{({ loading: queryLoading, data: queryData, subscribeToMore }) => (
			<Mutation mutation={UPDATE_USER_MUTATION}>
				{(updateUserMutation, { loading: mutationLoading }) => (
					<PartyContainer
						queryData={queryData}
						queryIsLoading={queryLoading}
						mutationIsLoading={mutationLoading}
						subscribeToMore={subscribeToMore}
						updateUserMutation={updateUserMutation}
						{...props}
					/>
				)}
			</Mutation>
		)}
	</Query>
)

export default PartyContainerWithQuery
