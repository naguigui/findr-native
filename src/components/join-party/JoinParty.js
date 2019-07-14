import React from 'react'
import Input from '../input'
import Button from '../button'

import * as S from './JoinParty.styled.js'

const JoinParty = (props) => {
	const { pinValue, onChange, joinParty } = props
	return (
		<S.JoinPartyWrapper>
			<S.Title>Joining the party.</S.Title>
			<S.Message>Enter the Room Pin</S.Message>
			<S.Content>
				<S.InputWrapper>
					<Input
						label="Secret Pin"
						value={pinValue}
						name="pin"
						onChange={onChange}
						isSecondary={true}
					/>
				</S.InputWrapper>
				<S.ButtonWrapper>
					<Button btnText="Let's get it." onPress={joinParty} />
				</S.ButtonWrapper>
			</S.Content>
		</S.JoinPartyWrapper>
	)
}

export default JoinParty
