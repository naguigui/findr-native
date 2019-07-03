import React from 'react'
import { Text } from 'react-native'
import { Button as NativeBaseButton } from 'native-base'
import * as S from './Button.styled'

const Button = (props) => {
	const { btnText, onPress } = props
	return (
		<NativeBaseButton full success onPress={onPress}>
			<S.ButtonText>{btnText}</S.ButtonText>
		</NativeBaseButton>
	)
}

export default Button
