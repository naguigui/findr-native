import React from 'react'
import { Button as NativeBaseButton } from 'native-base'
import * as S from './Button.styled'

const Button = (props) => {
	const { btnText, onPress, rounded, bordered, light } = props
	const darkText = light && !bordered
	return (
		<NativeBaseButton
			full
			onPress={onPress}
			rounded={rounded}
			bordered={bordered}
			light={light}
		>
			<S.ButtonText darkText={darkText}>{btnText}</S.ButtonText>
		</NativeBaseButton>
	)
}

Button.defaultProps = {
	rounded: false,
	bordered: false,
	light: false,
}

export default Button
