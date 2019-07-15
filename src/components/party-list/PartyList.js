import React from 'react'
import { FlatList } from 'react-native'
import Button from '../button'
import ListItem from '../list-item'

import * as S from './PartyList.styled.js'

const PartyList = (props) => {
	const { party, roomName, onReady } = props

	const renderUserInParty = ({ item }) => {
		const subtitle = item.isReady ? 'Ready' : 'Not Ready'
		return <ListItem key={item._id} label={item.name} subtitle={subtitle} />
	}

	const keyExtractor = (item) => item._id

	return (
		<S.PartyListWrapper>
			<>
				<S.Title>{roomName}</S.Title>
				<FlatList
					data={party}
					renderItem={renderUserInParty}
					keyExtractor={keyExtractor}
					extraData={party}
				/>
			</>
			<S.ButtonWrapper>
				<Button btnText="Ready" onPress={onReady} />
			</S.ButtonWrapper>
		</S.PartyListWrapper>
	)
}

export default PartyList
