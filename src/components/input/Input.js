import React from 'react'
import { Item, Input as NativeBaseInput, Label } from 'native-base'

import * as Colors from '../../theme/colors'

const Input = (props) => {
	const {
		label,
		value,
		onChange,
		name,
		isPassword,
		textContentType,
		isSecondary,
	} = props
	return (
		<Item floatingLabel>
			<Label
				style={{
					color: isSecondary ? Colors.MAIN_BLUE : Colors.WHITE,
					fontWeight: 'bold',
				}}
			>
				{label}
			</Label>
			<NativeBaseInput
				style={{
					color: isSecondary ? Colors.BLACK : Colors.WHITE,
					fontWeight: 'bold',
				}}
				value={value}
				onChangeText={(val) => {
					return onChange(name, val)
				}}
				secureTextEntry={isPassword}
				textContentType={textContentType}
			/>
		</Item>
	)
}

Input.defaultProps = {
	isPassword: false,
}

export default Input
