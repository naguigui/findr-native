import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { HttpLink } from 'apollo-link-http'
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

const httpLink = new HttpLink({
	uri: `${config.BASE_API_URL}/graphql`,
})

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: authLink.concat(httpLink),
})

export const resetCache = () => {
	client.resetStore()
}

export default client
