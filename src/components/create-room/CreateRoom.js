import React from 'react'
import Input from '../input'
import Button from '../button'
import * as S from './CreateRoom.styled'

const CreateRoom = (props) => {
	const { name, onChange, createRoom } = props
	return (
		<S.CreateRoomWrapper>
			<S.Title>Name your party</S.Title>
			<Input
				label="Name"
				name="name"
				value={name}
				onChange={onChange}
				isSecondary={true}
			/>
			<S.ButtonWrapper>
				<Button btnText="Let's get it." onPress={createRoom} />
			</S.ButtonWrapper>
		</S.CreateRoomWrapper>
	)
}

export default CreateRoom
