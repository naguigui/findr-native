import React from 'react'
import RootNavigator from '../../navigation/rootNavigator'
import navigationService from '../../services/navigationService'

const AppContainer = () => {
	return (
		<RootNavigator
			ref={(navigatorRef) => {
				navigationService.setTopLevelNavigator(navigatorRef)
			}}
		/>
	)
}

export default AppContainer
