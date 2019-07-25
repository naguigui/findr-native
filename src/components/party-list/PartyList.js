import React from 'react'
import { FlatList } from 'react-native'
import Button from '../button'
import ListItem from '../list-item'

import * as S from './PartyList.styled.js'

const PartyList = (props) => {
	const { party, roomName, startSession, pin } = props

	const renderUserInParty = ({ item }) => (
		<ListItem key={item._id} label={item.name} subtitle={item.email} />
	)

	const keyExtractor = (item) => item._id

	return (
		<S.PartyListWrapper>
			<>
				<S.Title>{roomName}</S.Title>
				<S.Subtitle>Invite your friends using this pin</S.Subtitle>
				<S.Message>{pin}</S.Message>
				<FlatList
					data={party}
					renderItem={renderUserInParty}
					keyExtractor={keyExtractor}
					extraData={party}
				/>
			</>
			<S.ButtonWrapper>
				<Button btnText="Start" onPress={startSession} />
			</S.ButtonWrapper>
		</S.PartyListWrapper>
	)
}

export default PartyList
