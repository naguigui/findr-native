import React from 'react'
import Input from '../input'
import Button from '../button'
import DisplayListItem from '../display-list-item'

import * as S from './AccountSettingsEdit.styled.js'

const AccountSettingsEdit = (props) => {
	const {
		nameValue,
		emailValue,
		onChange,
		namePlaceholder,
		emailPlaceholder,
		updateUser,
	} = props
	return (
		<S.AccountSettingsEditWrapper>
			<S.InputWrapper>
				<DisplayListItem
					label="Name"
					value={nameValue}
					name="name"
					onChange={onChange}
					placeholder={namePlaceholder}
				/>
			</S.InputWrapper>
			<S.InputWrapper>
				<DisplayListItem
					label="Email"
					value={emailValue}
					name="email"
					onChange={onChange}
					placeholder={emailPlaceholder}
				/>
			</S.InputWrapper>
			<S.ButtonWrapper>
				<Button btnText="Update user" onPress={updateUser} />
			</S.ButtonWrapper>
		</S.AccountSettingsEditWrapper>
	)
}

export default AccountSettingsEdit
