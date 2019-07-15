import React from 'react'
import { FlatList, Clipboard } from 'react-native'
import Button from '../button'
import * as Colors from '../../theme/colors'
import ListItemWithIcon from '../list-item-with-icon'

import * as S from './PartyList.styled.js'

const PartyList = (props) => {
	const { party, roomName, onReady, isReady, pin } = props

	const renderUserInParty = ({ item }) => (
		<ListItemWithIcon
			key={item._id}
			label={item.name}
			subtitle={item.email}
			iconName={item.isReady ? 'ios-checkmark-circle' : 'ios-alert'}
			iconColor={item.isReady ? Colors.MAIN_BLUE : Colors.RED}
		/>
	)

	const keyExtractor = (item) => item._id

	const btnText = isReady ? 'Not Ready' : 'Ready'

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
				<Button btnText={btnText} onPress={onReady} />
			</S.ButtonWrapper>
		</S.PartyListWrapper>
	)
}

export default PartyList
