import React from 'react'
import Carousel from '../carousel'

import * as S from './RestaurantSelection.styled.js'

const RestaurantSelection = (props) => {
	const { restaurantData, renderCard } = props
	return (
		<S.RestaurantSelectionWrapper>
			<S.Content>
				<Carousel data={restaurantData} renderItem={renderCard} />
			</S.Content>
		</S.RestaurantSelectionWrapper>
	)
}

export default RestaurantSelection
