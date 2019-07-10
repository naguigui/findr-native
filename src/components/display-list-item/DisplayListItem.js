import React from 'react'
import { Item, Input } from 'native-base'

import * as S from './DisplayListItem.styled.js'

const DisplayListItem = (props) => {
	const { label, name, placeholder, value, onChange } = props
	return (
		<S.DisplayListItemWrapper>
			<S.Label>{label}</S.Label>
			<Item>
				<Input
					placeholder={placeholder}
					value={value}
					onChangeText={(val) => onChange(name, val)}
				/>
			</Item>
		</S.DisplayListItemWrapper>
	)
}

export default DisplayListItem
