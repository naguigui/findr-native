import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { isEmpty } from 'lodash'
import { Layout, PartyList } from '../../components'

const GET_USER = gql`
	{
		user {
			room {
				roomOwner {
					name
				}
				sessionStarted
				name
				_id
				party {
					name
					email
					_id
				}
			}
		}
	}
`

const PartyContainer = (props) => {
	const { isLoading, queryData, refetch } = props

	return (
		<Layout isAuthenticated={true} isLoading={isLoading}>
			{!isEmpty(queryData) && (
				<PartyList
					party={queryData.user.room.party}
					roomName={queryData.user.room.name}
					refetch={refetch}
					isLoading={isLoading}
				/>
			)}
		</Layout>
	)
}

const PartyContainerWithQuery = (props) => (
	<Query query={GET_USER} fetchPolicy="network-only">
		{({ loading, data, refetch }) => (
			<PartyContainer
				queryData={data}
				isLoading={loading}
				{...props}
				refetch={refetch}
			/>
		)}
	</Query>
)

export default PartyContainerWithQuery
