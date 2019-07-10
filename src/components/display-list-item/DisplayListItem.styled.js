import styled from 'styled-components/native'

export const DisplayListItemWrapper = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
`

export const Label = styled.Text`
	font-size: 16;
	color: ${(props) => props.theme.colors.cloud_burst};
	width: 20%;
`
