import React from 'react'
import { Button as NativeBaseButton } from 'native-base'
import * as Colors from '../../theme/colors'
import * as S from './Button.styled'

const Button = (props) => {
	const { btnText, onPress, isSecondary } = props
	return (
		<NativeBaseButton
			full
			onPress={onPress}
			rounded={true}
			bordered={true}
			light={isSecondary}
			style={{
				borderColor: Colors.WHITE,
				backgroundColor: isSecondary ? Colors.WHITE : Colors.MAIN_BLUE,
			}}
		>
			<S.ButtonText isSecondary={isSecondary}>{btnText}</S.ButtonText>
		</NativeBaseButton>
	)
}

Button.defaultProps = {
	rounded: false,
	bordered: false,
	light: false,
}

export default Button
