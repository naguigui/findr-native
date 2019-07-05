import React from 'react'
import * as S from './CustomHeader.styled'

const CustomHeader = ({ title, subtitle }) => (
	<S.CustomHeaderWrapper>
		<S.Content>
			<S.Title>{title}</S.Title>
			<S.Subtitle>{subtitle}</S.Subtitle>
		</S.Content>
	</S.CustomHeaderWrapper>
)

export default CustomHeader
