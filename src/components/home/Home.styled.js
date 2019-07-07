import styled from 'styled-components/native'

export const HomeWrapper = styled.View`
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
	color: ${(props) => props.theme.colors.main};
	margin-bottom: 32;
`

export const LoadingText = styled.Text`
	font-size: 18;
	color: ${(props) => props.theme.colors.black};
`

export const ButtonWrapper = styled.View`
	margin-bottom: 8;
`
