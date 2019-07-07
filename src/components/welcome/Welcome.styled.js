import styled from 'styled-components/native'

export const LoginLink = styled.Text`
	font-size: 18;
	font-weight: bold;
	color: ${(props) => props.theme.colors.white};
	align-self: flex-end;
	margin-top: 12%;
`

export const WelcomeWrapper = styled.View`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding-left: 16;
	padding-right: 16;
	background-color: ${(props) => props.theme.colors.main};
`

export const Content = styled.View`
	display: flex;
	flex-direction: column;
	flex: 1;
	margin-top: 48%;
`

export const Title = styled.Text`
	font-size: 32;
	font-weight: bold;
	color: ${(props) => props.theme.colors.white};
	margin-bottom: 32;
`

export const ButtonWrapper = styled.View`
	margin-bottom: 12;
`
