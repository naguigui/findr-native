import styled from 'styled-components/native'

export const ButtonText = styled.Text`
	color: ${(props) => {
		return props.isSecondary
			? props.theme.colors.main
			: props.theme.colors.white
	}};
	font-size: 18;
`
