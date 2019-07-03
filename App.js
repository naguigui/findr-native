import React from 'react'
import { ApolloProvider } from 'react-apollo'

import AppContainer from './src/containers/app-container'

import client from './src/graphql/client'

export default function App() {
	return (
		<ApolloProvider client={client}>
			<AppContainer />
		</ApolloProvider>
	)
}
