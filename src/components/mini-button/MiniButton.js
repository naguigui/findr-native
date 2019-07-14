import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import * as Colors from '../../theme/colors'

import * as S from './MiniButton.styled.js'

const MiniButton = (props) => {
	const { btnText, onPress, iconName } = props
	return (
		<S.MiniButtonWrapper onPress={onPress}>
			<Ionicons name={iconName} size={64} color={Colors.WHITE} />
			<S.ButtonText>{btnText}</S.ButtonText>
		</S.MiniButtonWrapper>
	)
}

export default MiniButton
