import styled from 'styled-components/native'
import { SafeAreaView } from 'react-navigation'

export const CustomHeaderWrapper = styled(SafeAreaView)`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-height: 100;
	width: 100%;
	background-color: ${(props) => props.theme.colors.white};
	border-bottom-width: 1;
	border-bottom-color: ${(props) => props.theme.colors.grey};
`

export const Content = styled.View`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding-left: 15%;
`

export const Title = styled.Text`
	font-size: 20;
	font-weight: bold;
	color: ${(props) => props.theme.colors.black};
	margin-bottom: 5;
`

export const Subtitle = styled.Text`
	font-size: 16;
	color: ${(props) => props.theme.colors.main};
`
