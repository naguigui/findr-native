import styled from 'styled-components/native'

export const AccountHeroWrapper = styled.View`
	display: flex;
	flex-direction: column;
	height: 200;
	background-color: ${(props) => {
		return props.theme.colors.white
	}};
	align-items: center;
	justify-content: center;
	margin-top: 8;
`

export const NameLabel = styled.Text`
	font-size: 18;
	color: ${(props) => {
		return props.theme.colors.black
	}};
`

export const EditAccountLabel = styled.Text`
	font-size: 12;
	color: ${(props) => {
		return props.theme.colors.main
	}};
	font-weight: bold;
`
