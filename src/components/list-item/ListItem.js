import React from 'react'
import * as S from './ListItem.styled'

const ListItem = (props) => {
	const { label, onPress } = props
	return (
		<S.ListItemWrapper onPress={onPress}>
			<S.Label>{label}</S.Label>
		</S.ListItemWrapper>
	)
}

export default ListItem
