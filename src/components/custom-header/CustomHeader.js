import React from 'react'
import * as S from './CustomHeader.styled'

const CustomHeader = ({ title, subtitle, onPress }) => (
	<S.CustomHeaderWrapper>
		<S.Content>
			<S.Title>{title}</S.Title>
			<S.Subtitle onPress={onPress}>{subtitle}</S.Subtitle>
		</S.Content>
	</S.CustomHeaderWrapper>
)

export default CustomHeader
