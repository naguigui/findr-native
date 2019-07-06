import ApolloClient from 'apollo-boost'
import { getHeader } from '../services/apiHelpers'

const LOGIN_OPERATION = 'login'
const REGISTRATION_OPERATION = 'registerUser'

const client = new ApolloClient({
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

export default client
