import gql from 'graphql-tag'

export const GET_USER = gql`
	{
		user {
			room {
				roomOwner {
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
			room {
				roomOwner {
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
