import React from 'react'
import { FlatList } from 'react-native'
import Button from '../button'
import ListItem from '../list-item'

import * as S from './PartyList.styled.js'

const PartyList = (props) => {
	const { party, roomName, refetch, isLoading, roomOwner } = props

	const renderUserInParty = ({ item }) => {
		const subtitle = roomOwner._id === item._id ? 'Room Owner' : null
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
					onRefresh={refetch}
					refreshing={isLoading}
				/>
			</>
			<S.ButtonWrapper>
				<Button btnText="Ready" />
			</S.ButtonWrapper>
		</S.PartyListWrapper>
	)
}

export default PartyList
