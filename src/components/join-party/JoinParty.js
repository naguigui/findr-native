import React from 'react'
import Input from '../input'
import Button from '../button'

import * as S from './JoinParty.styled.js'

const JoinParty = (props) => {
	const { pinValue, onChange, joinParty } = props
	return (
		<S.JoinPartyWrapper>
			<S.Title>Enter a pin to get started.</S.Title>
			<Input
				label="Secret Pin"
				value={pinValue}
				name="pin"
				onChange={onChange}
				isSecondary={true}
			/>
			<S.ButtonWrapper>
				<Button btnText="Lets get it." onPress={joinParty} />
			</S.ButtonWrapper>
		</S.JoinPartyWrapper>
	)
}

export default JoinParty
