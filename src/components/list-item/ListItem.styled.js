import styled from 'styled-components/native'

export const ListItemWrapper = styled.TouchableOpacity`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 54;
	background-color: ${(props) => {
		return props.theme.colors.white
	}};
	border-top-width: 1;
	border-bottom-width: 1;
	border-top-color: ${(props) => {
		return props.theme.colors.grey
	}};
	border-bottom-color: ${(props) => {
		return props.theme.colors.grey
	}};
`

export const Label = styled.Text`
	font-size: 18;
	color: ${(props) => {
		return props.theme.colors.black
	}};
	padding-left: 16;
`
