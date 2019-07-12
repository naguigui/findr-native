import styled from 'styled-components/native'

export const MiniButtonWrapper = styled.TouchableOpacity`
	display: flex;
	flex-direction: column;
	height: 120;
	width: 140;
	background-color: ${(props) => props.theme.colors.main};
	align-items: center;
	justify-content: center;
`

export const ButtonText = styled.Text`
	font-size: 18;
	color: ${(props) => props.theme.colors.white};
	padding-left: 10;
	padding-right: 10;
`
