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
	HomeContainer,
} from '../containers'

import { Welcome, CustomHeader } from '../components'

import * as Routes from '../utils/routeNames'

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
		[Routes.WELCOME_ROUTE]: {
			screen: Welcome,
			navigationOptions: () => ({
				...defaultNavigationOptions,
			}),
		},
		[Routes.LOGIN_ROUTE]: {
			screen: LoginContainer,
			navigationOptions: () => ({
				...defaultNavigationOptions,
			}),
		},
		[Routes.REGISTRATION_ROUTE]: {
			screen: RegistrationContainer,
			navigationOptions: () => ({
				...defaultNavigationOptions,
			}),
		},
	},
	{
		initialRouteName: Routes.WELCOME_ROUTE,
	},
)

const HomeStack = createStackNavigator({
	[Routes.HOME_ROUTE]: {
		screen: HomeContainer,
		navigationOptions: ({ navigation }) => {
			return {
				header: (
					<CustomHeader
						title="Welcome"
						subtitle={navigation.getParam('subtitle')}
					/>
				),
			}
		},
	},
})

const AccountSettingsStack = createStackNavigator({
	[Routes.ACCOUNT_SETTINGS_ROUTE]: {
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
		[Routes.HOME_ROUTE]: HomeStack,
		[Routes.ACCOUNT_SETTINGS_ROUTE]: AccountSettingsStack,
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused }) => {
				const { routeName } = navigation.state
				let IconComponent = Ionicons
				let iconName
				if (routeName === Routes.HOME_ROUTE) {
					iconName = 'md-home'
				} else if (routeName === Routes.ACCOUNT_SETTINGS_ROUTE) {
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
			[Routes.AUTH_ROUTE]: AuthStack,
			[Routes.APP_ROUTE]: TabNavigator,
		},
		{
			initialRouteName: authenticated ? Routes.APP_ROUTE : Routes.AUTH_ROUTE,
		},
	)
}
