import React from 'react'
import RNSnapCarousel from 'react-native-snap-carousel'
import { SCREEN_WIDTH } from '../../utils/constants'

// Gets rid of the weird scaling animation
const INACTIVE_SLIDE_SCALE = 1

const Carousel = (props) => {
	const {
		reference,
		data,
		itemWidth,
		renderItem,
		sliderWidth,
		onSnapToItem,
		removeClippedSubviews,
	} = props
	return (
		<RNSnapCarousel
			layout="tinder"
			layoutCardOffset={9}
			ref={reference}
			data={data}
			itemWidth={itemWidth}
			renderItem={renderItem}
			sliderWidth={sliderWidth}
			inactiveSlideScale={INACTIVE_SLIDE_SCALE}
			onSnapToItem={onSnapToItem}
			removeClippedSubviews={removeClippedSubviews}
		/>
	)
}

Carousel.defaultProps = {
	itemWidth: SCREEN_WIDTH,
	sliderWidth: SCREEN_WIDTH,
	inactiveSlideScale: INACTIVE_SLIDE_SCALE,
	removeClippedSubviews: false,
}

export default Carousel
