import React from 'react'
import RegistrationContainer from '../containers/registration-container'
import { View, Text } from 'react-native'

const DummyComponent = () => (
	<View>
		<Text>Dummy</Text>
	</View>
)

import {
	createSwitchNavigator,
	createStackNavigator,
	createAppContainer,
} from 'react-navigation'

const AuthStack = createStackNavigator(
	{
		Login: {
			screen: DummyComponent,
		},
		Registration: {
			screen: RegistrationContainer,
			navigationOptions: () => ({
				title: 'Registraton',
			}),
		},
	},
	{
		initialRouteName: 'Registration',
	},
)

const AppStack = createStackNavigator({
	Home: {
		screen: DummyComponent,
	},
})

const AppNavigator = createSwitchNavigator(
	{
		Auth: AuthStack,
		App: AppStack,
	},
	{
		initialRouteName: 'Auth',
	},
)

export default createAppContainer(AppNavigator)
