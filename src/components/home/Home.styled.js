import styled from 'styled-components/native'

export const HomeWrapper = styled.View`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding-left: 24;
	padding-right: 24;
	margin-top: 48;
`

export const Title = styled.Text`
	font-size: 32;
	font-weight: bold;
	color: ${(props) => props.theme.colors.main};
	margin-bottom: 8;
`

export const Subtitle = styled.Text`
	font-size: 32;
	font-weight: bold;
	color: ${(props) => props.theme.colors.cloud_burst};
	margin-bottom: 64;
`

export const Message = styled.Text`
	font-size: 24;
	font-weight: bold;
	color: ${(props) => props.theme.colors.cloud_burst};
	margin-bottom: 32;
`

export const LoadingText = styled.Text`
	font-size: 18;
	color: ${(props) => props.theme.colors.cloud_burst};
`

export const ButtonWrapper = styled.View`
	margin-right: 10;
`

export const ButtonContentWrapper = styled.View`
	display: flex;
	flex-direction: row;
`
