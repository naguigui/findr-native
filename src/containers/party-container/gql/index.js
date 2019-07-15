import gql from 'graphql-tag'

export const GET_USER = gql`
	{
		user {
			_id
			isReady
			room {
				sessionStarted
				name
				_id
				pin
				party {
					name
					email
					_id
					isReady
				}
			}
		}
	}
`

export const GET_USER_SUBSCRIPTION = gql`
	subscription {
		userUpdated {
			_id
			isReady
			room {
				sessionStarted
				name
				_id
				pin
				party {
					name
					email
					_id
					isReady
				}
			}
		}
	}
`

export const UPDATE_USER_MUTATION = gql`
	mutation updateUser($isReady: Boolean!) {
		updateUser(input: { isReady: $isReady }) {
			_id
			isReady
		}
	}
`
