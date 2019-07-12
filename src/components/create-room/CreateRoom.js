import React from 'react'
import Input from '../input'
import Button from '../button'
import * as S from './CreateRoom.styled'

const CreateRoom = (props) => {
	const { name, onChange, createRoom } = props
	return (
		<S.CreateRoomWrapper>
			<S.Title>Creating your party.</S.Title>
			<S.Message>Give It a Name</S.Message>
			<S.Content>
				<S.InputWrapper>
					<Input
						label="Name"
						name="name"
						value={name}
						onChange={onChange}
						isSecondary={true}
					/>
				</S.InputWrapper>
				<S.ButtonWrapper>
					<Button btnText="Let's get it." onPress={createRoom} />
				</S.ButtonWrapper>
			</S.Content>
		</S.CreateRoomWrapper>
	)
}

export default CreateRoom
