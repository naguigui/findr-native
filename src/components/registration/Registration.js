import React from 'react'

import Input from '../input'
import Button from '../button'
import * as S from './Registration.styled'

const Registration = (props) => {
	const { name, email, password, onChange, onSubmit, navigateToLogin } = props

	return (
		<S.RegistrationWrapper>
			<S.Title>Create an account</S.Title>
			<S.FormWrapper>
				<S.InputWrapper>
					<Input label="Name" name="name" value={name} onChange={onChange} />
				</S.InputWrapper>
				<S.InputWrapper>
					<Input
						label="Email"
						name="email"
						value={email}
						onChange={onChange}
						textContentType="emailAddress"
					/>
				</S.InputWrapper>
				<S.InputWrapper>
					<Input
						label="Password"
						name="password"
						value={password}
						isPassword={true}
						onChange={onChange}
					/>
				</S.InputWrapper>
			</S.FormWrapper>
			<S.ButtonWrapper>
				<Button btnText="Register" onPress={onSubmit} isSecondary={true} />
			</S.ButtonWrapper>
			<S.FooterText onPress={navigateToLogin}>
				Already have an account? Log in
			</S.FooterText>
		</S.RegistrationWrapper>
	)
}

export default Registration
