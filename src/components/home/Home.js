import React from 'react'

import Button from '../button'
import * as S from './Home.styled'

const Home = (props) => {
	const { onCreateRoom, onJoinRoom, hasSession } = props
	return (
		<S.HomeWrapper>
			{!hasSession && <S.Title>Get started by selecting</S.Title>}
			<S.ButtonWrapper>
				<Button
					btnText="Create a room"
					rounded
					bordered
					onPress={onCreateRoom}
					solid
				/>
			</S.ButtonWrapper>
			<S.ButtonWrapper>
				<Button
					btnText="Join a room"
					rounded
					bordered
					onPress={onJoinRoom}
					solid
				/>
			</S.ButtonWrapper>
		</S.HomeWrapper>
	)
}

Home.defaultProps = {
	hasSession: false,
}

export default Home
