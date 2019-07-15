import * as SecureStore from 'expo-secure-store'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import config from '../../config'

import { getHeader } from '../services/apiHelpers'

const authLink = setContext((_, { headers }) => {
	const header = getHeader()
	if (header) {
		return {
			headers: {
				...headers,
				...header,
			},
		}
	}
	return null
})

const wsLink = new WebSocketLink({
	uri: `${config.BASE_WS_API_URL}/graphql`,
	options: {
		reconnect: true,
		keepAlive: true,
		connectionParams: async () => {
			const authToken = await SecureStore.getItemAsync('titan_access_token')
			return {
				authorization: authToken,
			}
		},
	},
})

const httpLink = new HttpLink({
	uri: `${config.BASE_API_URL}/graphql`,
})

const link = split(
	({ query }) => {
		const definition = getMainDefinition(query)
		return (
			definition.kind === 'OperationDefinition' &&
			definition.operation === 'subscription'
		)
	},
	wsLink,
	httpLink,
)

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: authLink.concat(link),
	onError: ({ networkError, graphQLErrors }) => {
		console.log('graphQLErrors', graphQLErrors)
		console.log('networkError', networkError)
	},
})

export const resetCache = () => {
	client.resetStore()
}

export default client
