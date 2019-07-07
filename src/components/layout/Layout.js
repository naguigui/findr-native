import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay'

import * as S from './Layout.styled'

const Layout = ({ children, isLoading, isAuthenticated }) => (
		<S.LayoutWrapper isAuthenticated={isAuthenticated}>
			<Spinner visible={isLoading} />
			{children}
		</S.LayoutWrapper>
	)

Layout.defaultProps = {
	isAuthenticated: false,
}

export default Layout
