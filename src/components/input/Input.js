import React from 'react'
import { Item, Input as NativeBaseInput, Label } from 'native-base'

const Input = (props) => {
	const { label, value, onChange, name, isPassword, textContentType } = props
	return (
		<Item floatingLabel>
			<Label style={{ color: 'white', fontWeight: 'bold' }}>{label}</Label>
			<NativeBaseInput
				style={{
					color: 'white',
				}}
				value={value}
				onChangeText={(val) => onChange(name, val)}
				secureTextEntry={isPassword}
				textContentType={textContentType}
			/>
		</Item>
	)
}

export default Input
