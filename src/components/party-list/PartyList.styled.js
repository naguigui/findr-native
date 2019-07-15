import styled from 'styled-components/native'

export const PartyListWrapper = styled.View`
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
	margin-bottom: 72;
`

export const Subtitle = styled.Text`
	font-size: 24;
	font-weight: bold;
	color: ${(props) => props.theme.colors.cloud_burst};
	margin-bottom: 32;
`

export const Message = styled.Text`
	font-size: 24;
	font-weight: bold;
	color: ${(props) => props.theme.colors.cloud_burst};
	margin-bottom: 32;
`

export const ButtonWrapper = styled.View`
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: flex-end;
	margin-bottom: 16;
`
