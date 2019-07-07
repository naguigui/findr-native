import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'
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

const CreateRoomContainer = (props) => {
	const { createRoomAction, isLoading } = props
	const [formValues, setFormValues] = useState({
		name: '',
	})

	const onChange = (name, value) => {
		setFormValues({
			...formValues,
			[name]: value,
		})
	}

	const createRoom = () => {
		createRoomAction({
			variables: {
				name: formValues.name,
			},
		})
	}

	return (
		<Layout isLoading={isLoading} isAuthenticated>
			<CreateRoom
				name={formValues.name}
				onChange={onChange}
				createRoom={createRoom}
			/>
		</Layout>
	)
}

const CreateRoomContainerWithMutation = (props) => (
	<Mutation
		mutation={CREATE_ROOM_MUTATION}
		onCompleted={() => {
			navigationService.navigate({
				routeName: Routes.PARTY_ROUTE,
			})
		}}
	>
		{(createRoomAction, { loading, data }) => (
			<CreateRoomContainer
				createRoomAction={createRoomAction}
				isLoading={loading}
				mutationData={data}
				{...props}
			/>
		)}
	</Mutation>
)

export default CreateRoomContainerWithMutation
