import React, { useState } from 'react'
import gql from 'graphql-tag'
import { useMutation } from 'react-apollo-hooks'
import { Layout, CreateRoom } from '../../components'

import navigationService from '../../services/navigationService'
import * as Routes from '../../utils/routeNames'

const CREATE_ROOM_MUTATION = gql`
	mutation createRoom($name: String!) {
		createRoom(input: { name: $name }) {
			userIds
			name
		}
	}
`

const CreateRoomContainer = () => {
	const [formValues, setFormValues] = useState({
		name: '',
	})
	const [createRoomAction, { loading }] = useMutation(CREATE_ROOM_MUTATION, {
		variables: { name: formValues.name },
	})

	const onChange = (name, value) => {
		setFormValues({
			...formValues,
			[name]: value,
		})
	}

	const createRoom = async () => {
		await createRoomAction()
		navigationService.navigate({
			routeName: Routes.PARTY_ROUTE,
		})
	}

	return (
		<Layout isLoading={loading} isAuthenticated={true}>
			<CreateRoom
				name={formValues.name}
				onChange={onChange}
				createRoom={createRoom}
			/>
		</Layout>
	)
}

export default CreateRoomContainer
