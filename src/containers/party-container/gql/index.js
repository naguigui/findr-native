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

export const START_SESSION_MUTATION = gql`
	mutation startSession($roomId: String!) {
		startSession(input: { roomId: $roomId }) {
			_id
			sessionStarted
		}
	}
`
