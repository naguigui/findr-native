import { gql } from 'apollo-boost'

export const REGISTRATION_MUTATION = gql`
	mutation registerUser($name: String!, $email: String!, $password: String!) {
		registerUser(input: { name: $name, email: $email, password: $password }) {
			name
		}
	}
`

export const LOGIN_MUTATION = gql`
	mutation login($email: String!, $password: String!) {
		login(input: { email: $email, password: $password }) {
			accessToken
		}
	}
`
