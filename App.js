import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components/native'
import { Root } from 'native-base'

import AppContainer from './src/containers/app-container'

import theme from './src/theme/theme'

import client from './src/graphql/client'

console.disableYellowBox = true

export default function App() {
	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={theme}>
				<Root>
					<AppContainer />
				</Root>
			</ThemeProvider>
		</ApolloProvider>
	)
}
