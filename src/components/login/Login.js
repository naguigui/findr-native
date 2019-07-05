import React from 'react'

import Input from '../input'
import Button from '../button'

import * as S from './Login.styled'

const Login = (props) => {
	const { email, password, onChange, onSubmit, navigateToRegistration } = props
	return (
		<S.LoginWrapper>
			<S.Title>Log in to your account</S.Title>
			<S.FormWrapper>
				<S.InputWrapper>
					<Input label="Email" name="email" value={email} onChange={onChange} />
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
				<Button
					btnText="Login"
					onPress={onSubmit}
					rounded={true}
					light={true}
				/>
			</S.ButtonWrapper>
			<S.FooterText onPress={navigateToRegistration}>
				Don't have an account? Register for one
			</S.FooterText>
		</S.LoginWrapper>
	)
}

export default Login
