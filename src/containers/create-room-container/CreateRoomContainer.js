import React, { useState } from 'react'
import { gql } from 'apollo-boost'
import { Mutation } from 'react-apollo'
import { Layout, CreateRoom } from '../../components'

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

const CreateRoomContainerWithMutation = (props) => {
	return (
		<Mutation mutation={CREATE_ROOM_MUTATION}>
			{(createRoomAction, { loading, data }) => {
				return (
					<CreateRoomContainer
						createRoomAction={createRoomAction}
						isLoading={loading}
						mutationData={data}
						{...props}
					/>
				)
			}}
		</Mutation>
	)
}

export default CreateRoomContainerWithMutation
