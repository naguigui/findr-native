import gql from 'graphql-tag'

export const GET_RESTAURANTS_QUERY = gql`
	query getRestaurants($location: String!, $radius: Int!) {
		restaurants(input: { location: $location, radius: $radius }) {
			id
			name
			rating
			phone
			isClosed
			imageUrl
			location {
				city
				country
				state
				address
			}
		}
	}
`
