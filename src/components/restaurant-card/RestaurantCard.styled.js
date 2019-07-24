import styled from 'styled-components/native'

export const RestaurantCardWrapper = styled.View`
	display: flex;
	flex-direction: column;
	flex: 1;
	background-color: ${(props) => props.theme.colors.white};
`

export const ImageWrapper = styled.View`
	display: flex;
	flex-direction: column;
	flex: 1;
	border-radius: 10;
	max-height: 70%;
`

export const StyledImage = styled.Image`
	height: 100%;
	width: 100%;
`

export const Content = styled.View`
	display: flex;
	flex-direction: column;
	height: 150;
	padding-top: 24;
	padding-left: 18;
	padding-right: 18;
	padding-bottom: 24;
	justify-content: space-evenly;
	border-radius: 6;
	border-bottom-width: 1;
	border-bottom-color: ${(props) => props.theme.colors.grey};
`

export const NameWrapper = styled.View`
	display: flex;
	flex-direction: row;
	align-items: center;
`

export const Name = styled.Text`
	font-size: 18;
	font-weight: bold;
	color: ${(props) => props.theme.colors.cloud_burst};
	margin-right: 8;
`

export const Address = styled.Text`
	font-size: 14;
	font-weight: bold;
	color: ${(props) => props.theme.colors.cloud_burst};
`
