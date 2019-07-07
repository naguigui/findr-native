import React, { useState, useEffect } from 'react'
import { gql } from 'apollo-boost'
import client from '../../graphql/client'
import { Layout, PartyList } from '../../components'

const GET_USER = gql`
	{
		user {
			room {
				name
				party {
					_id
					name
					email
				}
			}
		}
	}
`

const PartyContainer = () => {
	const [room, setRoom] = useState([])

	useEffect(() => {
		const { user } = client.readQuery({
			query: GET_USER,
		})

		setRoom(user.room)
	}, [])

	return (
		<Layout isAuthenticated={true}>
			<PartyList party={room.party} roomName={room.name} />
		</Layout>
	)
}

export default PartyContainer
