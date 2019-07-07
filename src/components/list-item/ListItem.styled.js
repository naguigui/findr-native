import styled from 'styled-components/native'

export const ListItemWrapper = styled.TouchableOpacity`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 64;
	background-color: ${(props) => props.theme.colors.white};
	border-bottom-width: 1;
	border-bottom-color: ${(props) => props.theme.colors.grey};
`

export const Label = styled.Text`
	font-size: 18;
	font-weight: bold;
	color: ${(props) => props.theme.colors.cloud_burst};
	margin-bottom: 8;
`

export const Subtitle = styled.Text`
	font-size: 14;
	font-weight: bold;
	color: ${(props) => props.theme.colors.cloud_burst};
`
