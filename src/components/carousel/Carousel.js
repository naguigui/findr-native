import React from 'react'
import Swiper from 'react-native-deck-swiper'

import * as S from './Carousel.styled'

const Carousel = (props) => {
	const { data, renderItem } = props
	return (
		<S.CarouselWrapper>
			<Swiper
				cards={data}
				renderCard={renderItem}
				backgroundColor="transparent"
				cardVerticalMargin={0}
				cardHorizontalMargin={0}
				showSecondCard={true}
				stackSize={2}
			/>
		</S.CarouselWrapper>
	)
}

export default Carousel
