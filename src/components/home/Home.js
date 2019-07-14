import React from 'react'

import MiniButton from '../mini-button'
import * as S from './Home.styled'

const Home = (props) => {
	const { name, onCreateRoom, onJoinRoom, hasSession } = props
	return (
		<S.HomeWrapper>
			{!hasSession && (
				<>
					<S.Title>Welcome,</S.Title>
					<S.Subtitle>{name}</S.Subtitle>
				</>
			)}
			<S.Message>Get Started By</S.Message>
			<S.ButtonContentWrapper>
				<S.ButtonWrapper>
					<MiniButton
						btnText="Create Party"
						onPress={onCreateRoom}
						iconName="ios-flame"
					/>
				</S.ButtonWrapper>
				<S.ButtonWrapper>
					<MiniButton
						btnText="Join Party"
						onPress={onJoinRoom}
						iconName="md-people"
					/>
				</S.ButtonWrapper>
			</S.ButtonContentWrapper>
		</S.HomeWrapper>
	)
}

Home.defaultProps = {
	hasSession: false,
}

export default Home
