import ApolloClient from 'apollo-boost'
import { getHeader } from '../services/apiHelpers'

const client = new ApolloClient({
	uri: 'http://localhost:3000/graphql',
	request: async (operation) => {
		operation.setContext({
			headers: {
				...getHeader(),
			},
		})
	},
})

export default client
