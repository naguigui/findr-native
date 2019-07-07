import { NavigationActions, StackActions } from 'react-navigation'

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

const replace = ({ routeName, params = {} }) => {
	_navigator.dispatch(
		StackActions.replace({
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
	replace,
	setParams,
	setTopLevelNavigator,
}
