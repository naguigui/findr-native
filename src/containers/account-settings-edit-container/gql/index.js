import gql from 'graphql-tag'

export const GET_USER_QUERY = gql`
	{
		user {
			_id
			name
			email
		}
	}
`

export const UPDATE_USER_MUTATION = gql`
	mutation updateUser($name: String!) {
		updateUser(input: { name: $name }) {
			_id
			name
		}
	}
`
