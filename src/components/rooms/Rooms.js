import React from 'react'
import ListItem from '../list-item'

import * as S from './Rooms.styled.js'

const Rooms = (props) => {
	const { room } = props

	return (
		<S.RoomsWrapper>
			<S.Title>Join the party</S.Title>
			<ListItem label={room.name} />
		</S.RoomsWrapper>
	)
}

export default Rooms
