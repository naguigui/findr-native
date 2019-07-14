import gql from 'graphql-tag'

export const REGISTRATION_MUTATION = gql`
	mutation registerUser($name: String!, $email: String!, $password: String!) {
		registerUser(input: { name: $name, email: $email, password: $password }) {
			name
		}
	}
`
