import React from 'react'
import { useQuery, useMutation } from 'react-apollo-hooks'
import { Layout, PartyList } from '../../components'
import { GET_USER, UPDATE_USER_MUTATION } from './gql'

const PartyContainer = () => {
	const { data: queryData, loading: queryLoading } = useQuery(GET_USER)

	const [updateUserAction, { loading: mutationLoading }] = useMutation(
		UPDATE_USER_MUTATION,
		{
			variables: {
				isReady: queryData && !queryData.user.isReady,
			},
			refetchQueries: [{ query: GET_USER }],
		},
	)

	const isLoading = queryLoading || mutationLoading

	return (
		<Layout isAuthenticated={true} isLoading={isLoading}>
			{queryData && queryData.user && queryData.user.room && (
				<PartyList
					party={queryData.user.room.party}
					pin={queryData.user.room.pin}
					roomName={queryData.user.room.name}
					isReady={queryData.user.isReady}
					onReady={updateUserAction}
				/>
			)}
		</Layout>
	)
}

export default PartyContainer
