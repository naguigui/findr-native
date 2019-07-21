import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks'
import { ThemeProvider } from 'styled-components/native'
import { Root } from 'native-base'

import AppContainer from './src/containers/app-container'

import theme from './src/theme/theme'

import client from './src/graphql/client'

// eslint-disable-next-line
console.disableYellowBox = true

export default function App() {
	return (
		<ApolloProvider client={client}>
			<ApolloHooksProvider client={client}>
				<ThemeProvider theme={theme}>
					<Root>
						<AppContainer />
					</Root>
				</ThemeProvider>
			</ApolloHooksProvider>
		</ApolloProvider>
	)
}
