import React from 'react'
import { Ionicons } from '@expo/vector-icons'

import * as S from './ListItemWithIcon.styled.js'

const ListItemWithIcon = (props) => {
	const { label, subtitle, onPress, iconName, iconColor } = props
	return (
		<S.ListItemWithIconWrapper onPress={onPress}>
			<S.Content>
				<S.LeftContent>
					<S.Label>{label}</S.Label>
					{subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
				</S.LeftContent>
				<S.IconWrapper>
					<Ionicons name={iconName} size={32} color={iconColor} />
				</S.IconWrapper>
			</S.Content>
		</S.ListItemWithIconWrapper>
	)
}

export default ListItemWithIcon
