import styled from 'styled-components/native'

export const ButtonText = styled.Text`
	color: ${(props) => (props.darkText ? '#34a391' : '#fff')};
	font-size: 18;
`
