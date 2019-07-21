import React from 'react'
import { storiesOf } from '@storybook/react-native'
import Button from './Button'

storiesOf('Button', module)
	.add('Default button with text', () => (
		<Button btnText="Hello" onPress={() => {}} />
	))
	.add('isSecondary Button', () => (
		<Button btnText="Button Text" onPress={() => {}} isSecondary={true} />
	))
