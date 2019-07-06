import ApolloClient, { InMemoryCache } from 'apollo-boost'

import { getHeader } from '../services/apiHelpers'

const LOGIN_OPERATION = 'login'
const REGISTRATION_OPERATION = 'registerUser'

const cache = new InMemoryCache()

const client = new ApolloClient({
	cache,
	uri: 'http://localhost:3000/graphql',
	request: async (operation) => {
		const { operationName } = operation
		if (
			operationName !== LOGIN_OPERATION &&
			operationName !== REGISTRATION_OPERATION
		) {
			operation.setContext({
				headers: {
					...getHeader(),
				},
			})
		}
	},
})

export const resetCache = () => {
	client.resetStore()
}

export default client
