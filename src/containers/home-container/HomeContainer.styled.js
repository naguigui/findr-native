import styled from 'styled-components/native'

export const LoadingText = styled.Text`
	font-size: 18;
	color: ${(props) => {
		return props.theme.colors.cloud_burst
	}};
`

export const ButtonWrapper = styled.View`
	margin-bottom: 8;
`
