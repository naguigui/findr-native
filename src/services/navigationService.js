import { NavigationActions } from 'react-navigation'

let _navigator

const setTopLevelNavigator = (navigatorRef) => {
	_navigator = navigatorRef
}

const navigate = ({ routeName, params = {} }) => {
	_navigator.dispatch(
		NavigationActions.navigate({
			routeName,
			params,
		}),
	)
}

const setParams = ({ params, key }) => {
	_navigator.dispatch(
		NavigationActions.setParams({
			params,
			key,
		}),
	)
}

export default {
	navigate,
	setParams,
	setTopLevelNavigator,
}
