import React from 'react'
import { isEmpty } from 'lodash'
import { useQuery, useMutation } from 'react-apollo-hooks'
import RestaurantSelectionContainer from '../restaurant-selection-container'
import { Layout, PartyList } from '../../components'
import { GET_USER, START_SESSION_MUTATION } from './gql'

const PartyContainer = () => {
	const { data: queryData, loading: queryLoading } = useQuery(GET_USER)

	const [startSessionMutation, { loading: mutationLoading }] = useMutation(
		START_SESSION_MUTATION,
		{
			variables: {
				roomId: queryData && queryData.user.room._id,
			},
			refetchQueries: [{ query: GET_USER }],
		},
	)

	const isLoading = queryLoading || mutationLoading

	return (
		<Layout isAuthenticated={true} isLoading={isLoading}>
			{!isEmpty(queryData) && !queryData.user.room.sessionStarted && (
				<PartyList
					party={queryData.user.room.party}
					pin={queryData.user.room.pin}
					roomName={queryData.user.room.name}
					startSession={startSessionMutation}
				/>
			)}
			{!isEmpty(queryData) && queryData.user.room.sessionStarted && (
				<RestaurantSelectionContainer />
			)}
		</Layout>
	)
}

export default PartyContainer
