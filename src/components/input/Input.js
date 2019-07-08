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
					color: isSecondary ? Colors.CLOUD_BURST : Colors.WHITE,
					fontWeight: 'bold',
				}}
				placeholder="Josh Vo"
				value={value}
				onChangeText={(val) => onChange(name, val)}
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
