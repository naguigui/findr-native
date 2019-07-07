import React from 'react'
import { FlatList } from 'react-native'
import ListItem from '../list-item'

import * as S from './PartyList.styled.js'

const PartyList = (props) => {
	const { party, roomName } = props

	const renderUserInParty = ({ item }) => {
		return <ListItem key={item._id} label={item.name} subtitle={item.email} />
	}

	const keyExtractor = (item) => {
		return item._id
	}

	return (
		<S.PartyListWrapper>
			<S.Title>{roomName}</S.Title>
			<FlatList
				data={party}
				renderItem={renderUserInParty}
				keyExtractor={keyExtractor}
			/>
		</S.PartyListWrapper>
	)
}

export default PartyList
