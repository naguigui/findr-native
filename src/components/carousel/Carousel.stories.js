import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Carousel from './Carousel'
import RestaurantCard from '../restaurant-card'

const MOCK_DATA = [
	{
		id: 'RtUvSWO_UZ8V3Wpj0n077w',
		name: 'KINKA IZAKAYA ORIGINAL',
		rating: 4,
		phone: '+14169770999',
		isClosed: false,
		imageUrl:
			'https://s3-media3.fl.yelpcdn.com/bphoto/nHFVveLBqeiCGy12R2CnRA/o.jpg',
		location: {
			city: 'Toronto',
			country: 'CA',
			state: 'ON',
			address: '398 Church St',
		},
	},
	{
		id: 'saijdv-vXJrvsCfvr7SZOw',
		name: 'Katsuya',
		rating: 4.5,
		phone: '+14165917756',
		isClosed: false,
		imageUrl:
			'https://s3-media2.fl.yelpcdn.com/bphoto/aqFgA2D1kYjUCg6kZFs_-g/o.jpg',
		location: {
			city: 'Toronto',
			country: 'CA',
			state: 'ON',
			address: '66 Gerrard Street E',
		},
	},
	{
		id: 'pSMK_FtULKiU-iuh7SMKwg',
		name: "Blaze Fast-Fire'd Pizza",
		rating: 4.5,
		phone: '+16479331028',
		isClosed: false,
		imageUrl:
			'https://s3-media2.fl.yelpcdn.com/bphoto/J5H4X6F_JlwWZFJy4yW2Jg/o.jpg',
		location: {
			city: 'Toronto',
			country: 'CA',
			state: 'ON',
			address: '10 Dundas Street East',
		},
	},
]

const renderItem = (item) => {
	const { name, rating, imageUrl, location } = item
	const address = `${location.address}`
	return (
		<RestaurantCard
			name={name}
			rating={rating}
			imageUrl={imageUrl}
			address={address}
		/>
	)
}

storiesOf('Carousel', module).add('Standard', () => (
	<Carousel data={MOCK_DATA} renderItem={renderItem} />
))
