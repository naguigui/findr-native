import React from 'react'

import Input from '../input'
import Button from '../button'
import * as S from './Registration.styled'

const Registration = (props) => {
	const { name, email, password, onChange, onSubmit } = props

	return (
		<S.RegistrationWrapper>
			<S.FormWrapper>
				<S.InputWrapper>
					<Input label="name" name="name" value={name} onChange={onChange} />
				</S.InputWrapper>
				<S.InputWrapper>
					<Input label="email" name="email" value={email} onChange={onChange} />
				</S.InputWrapper>
				<S.InputWrapper>
					<Input
						label="password"
						name="password"
						value={password}
						isPassword={true}
						onChange={onChange}
					/>
				</S.InputWrapper>
			</S.FormWrapper>
			<Button btnText="Register" onPress={onSubmit} />
		</S.RegistrationWrapper>
	)
}

export default Registration
