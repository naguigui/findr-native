import gql from 'graphql-tag'

export const GET_USER_QUERY = gql`
	{
		user {
			name
			room {
				_id
				sessionStarted
				name
				party {
					_id
					name
					email
				}
			}
		}
	}
`

export const GET_USER_SUBSCRIPTION = gql`
	subscription {
		userUpdated {
			name
			room {
				_id
				sessionStarted
				name
				party {
					_id
					name
					email
				}
			}
		}
	}
`
