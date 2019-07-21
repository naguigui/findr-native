import gql from 'graphql-tag'

export const GET_USER_QUERY = gql`
	{
		user {
			_id
			name
			room {
				_id
				sessionStarted
				name
			}
		}
	}
`
