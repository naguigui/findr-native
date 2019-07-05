import styled from 'styled-components/native'
import { SafeAreaView } from 'react-navigation'

export const LayoutWrapper = styled(SafeAreaView)`
	display: flex;
	flex-direction: column;
	flex: 1;
	background-color: ${(props) => props.theme.colors.main};
`
