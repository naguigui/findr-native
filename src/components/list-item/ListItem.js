import React from 'react'
import * as S from './ListItem.styled'

const ListItem = (props) => {
	const { label, subtitle, onPress } = props
	return (
		<S.ListItemWrapper onPress={onPress}>
			<S.Label>{label}</S.Label>
			{subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
		</S.ListItemWrapper>
	)
}

export default ListItem
