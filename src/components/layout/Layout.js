import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import * as S from './Layout.styled'

const Layout = ({ children, isLoading }) => {
	return (
		<S.LayoutWrapper>
			<Spinner visible={isLoading} />
			{children}
		</S.LayoutWrapper>
	)
}

export default Layout
