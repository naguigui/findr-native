import React from 'react'
import { storiesOf } from '@storybook/react-native'
import RestaurantCard from './RestaurantCard'

const address = '66 Gerrard Street E Toronto, ON'

storiesOf('RestaurantCard', module).add('Standard', () => (
	<RestaurantCard
		name="Katusya"
		address={address}
		rating={4.5}
		imageUrl="https://s3-media2.fl.yelpcdn.com/bphoto/aqFgA2D1kYjUCg6kZFs_-g/o.jpg"
	/>
))
