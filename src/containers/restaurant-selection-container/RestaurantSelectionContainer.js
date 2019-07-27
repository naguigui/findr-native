import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { isEmpty } from 'lodash'
import {
	Layout,
	Carousel,
	RestaurantCard,
	RestaurantSelection,
} from '../../components'
import { GET_RESTAURANTS_QUERY } from './gql'

const RestaurantSelectionContainer = () => {
	const { data: queryData, loading } = useQuery(GET_RESTAURANTS_QUERY, {
		variables: {
			location: '140 Carlton St, Toronto ON',
			radius: 1000,
		},
	})

	const renderItem = (restaurantData) => {
		const {
			name,
			rating,
			imageUrl,
			location: { city, state, address },
		} = restaurantData
		const transformedLocation = `${address}, ${city}, ${state}`
		return (
			<RestaurantCard
				name={name}
				rating={rating}
				imageUrl={imageUrl}
				location={transformedLocation}
			/>
		)
	}

	return (
		<Layout isAuthenticated={true} isLoading={loading}>
			{!isEmpty(queryData) && (
				<RestaurantSelection
					restaurantData={queryData.restaurants}
					renderCard={renderItem}
				/>
			)}
		</Layout>
	)
}

export default RestaurantSelectionContainer
