import React from 'react'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'

import RegistrationContainer from '../containers/registration-container'
import LoginContainer from '../containers/login-container'
import Welcome from '../components/welcome'

import * as Colors from '../theme/colors'
import { View, Text } from 'react-native'

const DummyComponent = () => (
	<View>
		<Text>Dummy</Text>
	</View>
)

const defaultNavigationOptions = {
	headerStyle: {
		backgroundColor: Colors.MAIN_BLUE,
	},
	headerTintColor: Colors.WHITE,
}

const AuthStack = createStackNavigator(
	{
		Welcome: {
			screen: Welcome,
			navigationOptions: () => ({
				...defaultNavigationOptions,
			}),
		},
		Login: {
			screen: LoginContainer,
			navigationOptions: () => ({
				...defaultNavigationOptions,
			}),
		},
		Registration: {
			screen: RegistrationContainer,
			navigationOptions: () => ({
				...defaultNavigationOptions,
			}),
		},
	},
	{
		initialRouteName: 'Welcome',
	},
)

const AppStack = createStackNavigator({
	Home: {
		screen: DummyComponent,
	},
})

export const generateMainNavigator = (authenticated) => {
	return createSwitchNavigator(
		{
			Auth: AuthStack,
			App: AppStack,
		},
		{
			initialRouteName: authenticated ? 'App' : 'Auth',
		},
	)
}
