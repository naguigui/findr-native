import React from 'react'
import * as S from './Layout.styled'

const Layout = ({ children }) => {
	return <S.LayoutWrapper>{children}</S.LayoutWrapper>
}

export default Layout
