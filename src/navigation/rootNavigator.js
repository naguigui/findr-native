import React from 'react'
import {
	createBottomTabNavigator,
	createSwitchNavigator,
	createStackNavigator,
} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import {
	RegistrationContainer,
	LoginContainer,
	AccountViewContainer,
} from '../containers'

import Welcome from '../components/welcome'
import CustomHeader from '../components/custom-header'

import * as Colors from '../theme/colors'
import { View, Text } from 'react-native'
import navigationService from '../services/navigationService'

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

const AccountSettingsStack = createStackNavigator({
	Account: {
		screen: AccountViewContainer,
		navigationOptions: () => {
			return {
				header: <CustomHeader title="Account" />,
			}
		},
	},
})

const TabNavigator = createBottomTabNavigator(
	{
		Home: DummyComponent,
		AccountSettings: AccountSettingsStack,
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused }) => {
				const { routeName } = navigation.state
				let IconComponent = Ionicons
				let iconName
				if (routeName === 'Home') {
					iconName = 'md-home'
				} else if (routeName === 'AccountSettings') {
					iconName = 'md-person'
				}
				return (
					<IconComponent
						name={iconName}
						size={32}
						color={focused ? Colors.black : 'grey'}
					/>
				)
			},
		}),
		tabBarOptions: {
			showLabel: false,
		},
	},
)

export const generateMainNavigator = (authenticated) => {
	return createSwitchNavigator(
		{
			Auth: AuthStack,
			App: TabNavigator,
		},
		{
			initialRouteName: authenticated ? 'App' : 'Auth',
		},
	)
}
