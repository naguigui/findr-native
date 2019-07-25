import React from 'react'
import {
	createBottomTabNavigator,
	createSwitchNavigator,
	createStackNavigator,
} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

import {
	CreateRoomContainer,
	RegistrationContainer,
	LoginContainer,
	AccountViewContainer,
	AccountSettingsEditContainer,
	HomeContainer,
	PartyContainer,
	JoinPartyContainer,
} from '../containers'

import { Welcome, CustomHeader } from '../components'

import * as Routes from '../utils/routeNames'

import * as Colors from '../theme/colors'

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
		},
		[Routes.LOGIN_ROUTE]: {
			screen: LoginContainer,
		},
		[Routes.REGISTRATION_ROUTE]: {
			screen: RegistrationContainer,
		},
	},
	{
		initialRouteName: Routes.WELCOME_ROUTE,
		defaultNavigationOptions,
	},
)

const HomeStack = createStackNavigator(
	{
		[Routes.HOME_ROUTE]: {
			screen: HomeContainer,
			navigationOptions: () => ({
				header: null,
			}),
		},
		[Routes.CREATE_ROOM_ROUTE]: {
			screen: CreateRoomContainer,
		},
		[Routes.PARTY_ROUTE]: {
			screen: PartyContainer,
			navigationOptions: () => ({
				header: null,
			}),
		},
		[Routes.JOIN_PARTY_ROUTE]: {
			screen: JoinPartyContainer,
		},
	},
	{
		defaultNavigationOptions,
	},
)

const AccountSettingsStack = createStackNavigator(
	{
		[Routes.ACCOUNT_SETTINGS_ROUTE]: {
			screen: AccountViewContainer,
			navigationOptions: () => ({
				title: 'Account Settings',
			}),
		},
		[Routes.ACCOUNT_SETTINGS_EDIT_ROUTE]: {
			screen: AccountSettingsEditContainer,
			navigationOptions: () => ({
				title: 'Edit account',
			}),
		},
	},
	{
		defaultNavigationOptions,
		mode: 'modal',
	},
)

const TabNavigator = createBottomTabNavigator(
	{
		[Routes.HOME_ROUTE]: HomeStack,
		[Routes.ACCOUNT_SETTINGS_ROUTE]: AccountSettingsStack,
	},
	{
		defaultNavigationOptions: ({ navigation }) => {
			const TabBarIcon = ({ focused }) => {
				const { routeName } = navigation.state
				let iconName
				if (routeName === Routes.HOME_ROUTE) {
					iconName = 'md-home'
				} else if (routeName === Routes.ACCOUNT_SETTINGS_ROUTE) {
					iconName = 'md-person'
				}
				return (
					<Ionicons
						name={iconName}
						size={32}
						color={focused ? Colors.MAIN_BLUE : Colors.GREY}
					/>
				)
			}
			return {
				tabBarIcon: TabBarIcon,
			}
		},
		tabBarOptions: {
			showLabel: false,
		},
	},
)

export const generateMainNavigator = (authenticated) =>
	createSwitchNavigator(
		{
			[Routes.AUTH_ROUTE]: AuthStack,
			[Routes.APP_ROUTE]: TabNavigator,
		},
		{
			initialRouteName: authenticated ? Routes.APP_ROUTE : Routes.AUTH_ROUTE,
		},
	)
