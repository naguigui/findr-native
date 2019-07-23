import React from 'react'
import Stars from 'react-native-stars'

import * as S from './RestaurantCard.styled.js'

const STAR_SIZE = 20
const STAR_SPACING_BETWEEN = 4

const RestaurantCard = (props) => {
	const { name, address, rating, imageUrl } = props
	return (
		<S.RestaurantCardWrapper>
			<S.ImageWrapper>
				<S.StyledImage
					source={{
						uri: imageUrl,
					}}
					resizeMode="cover"
				/>
			</S.ImageWrapper>
			<S.Content>
				<S.NameWrapper>
					<S.Name>{name}</S.Name>
					<Stars
						half={true}
						display={rating}
						spacing={STAR_SPACING_BETWEEN}
						starSize={STAR_SIZE}
					/>
				</S.NameWrapper>
				<S.Address>{address}</S.Address>
			</S.Content>
		</S.RestaurantCardWrapper>
	)
}

export default RestaurantCard
