import styled from 'styled-components/native'

export const LoginWrapper = styled.View`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding-left: 16;
	padding-right: 16;
	margin-top: 16%;
`

export const Title = styled.Text`
	font-size: 32;
	font-weight: bold;
	color: ${(props) => {
		return props.theme.colors.white
	}};
	margin-bottom: 32;
`

export const FormWrapper = styled.View`
	margin-bottom: 16;
`

export const InputWrapper = styled.View`
	margin-bottom: 8;
`

export const ButtonWrapper = styled.View`
	margin-bottom: 16;
`

export const FooterText = styled.Text`
	font-size: 16;
	color: ${(props) => {
		return props.theme.colors.white
	}};
	text-align: center;
`
