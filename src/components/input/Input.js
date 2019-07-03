import React from 'react'
import { Item, Input as NativeBaseInput, Label } from 'native-base'

const Input = (props) => {
	const { label, value, onChange, name, isPassword } = props
	return (
		<Item floatingLabel>
			<Label>{label}</Label>
			<NativeBaseInput
				value={value}
				onChangeText={(val) => onChange(name, val)}
				secureTextEntry={isPassword}
			/>
		</Item>
	)
}

export default Input
