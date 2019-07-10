import gql from 'graphql-tag'

export const GET_USER_QUERY = gql`
	{
		user {
			name
			email
		}
	}
`

export const UPDATE_USER_MUTATION = gql`
	mutation updateUser($name: String!) {
		updateUser(input: { name: $name }) {
			name
			email
		}
	}
`
