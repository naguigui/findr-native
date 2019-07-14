import gql from 'graphql-tag'

export const GET_USER = gql`
	{
		user {
			_id
			room {
				roomOwner {
					_id
					name
				}
				sessionStarted
				name
				_id
				party {
					name
					email
					_id
				}
			}
		}
	}
`

export const GET_USER_SUBSCRIPTION = gql`
	subscription {
		userUpdated {
			_id
			room {
				roomOwner {
					_id
					name
				}
				sessionStarted
				name
				_id
				party {
					name
					email
					_id
				}
			}
		}
	}
`
