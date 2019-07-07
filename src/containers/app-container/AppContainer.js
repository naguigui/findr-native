import React, { useState } from 'react'
import { createAppContainer } from 'react-navigation'
import { AppLoading } from 'expo'
import { generateMainNavigator } from '../../navigation/rootNavigator'
import navigationService from '../../services/navigationService'
import AuthService from '../../services/authService'

const AppContainer = () => {
	const [isReady, setIsReady] = useState(false)
	const [isAuthenticated, setIsAuthenticated] = useState(false)

	const initializeApp = async () => {
		await AuthService.initFromStorage()
		const authenticated = AuthService.isAuthenticated()
		setIsAuthenticated(authenticated)
	}

	if (isReady) {
		const mainNavigator = generateMainNavigator(isAuthenticated)

		const RootNavigator = createAppContainer(mainNavigator)
		return (
			<RootNavigator
				ref={(navigatorRef) => {
					navigationService.setTopLevelNavigator(navigatorRef)
				}}
			/>
		)
	}
	return (
		<AppLoading
			startAsync={initializeApp}
			onFinish={() => {
				return setIsReady(true)
			}}
			onError={console.warn}
		/>
	)
}

export default AppContainer
