import gql from 'graphql-tag'

export const JOIN_PARTY_MUTATION = gql`
	mutation joinRoom($pin: String!) {
		joinRoom(input: { pin: $pin }) {
			userIds
			name
		}
	}
`
