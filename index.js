import { registerRootComponent } from 'expo'
import { useKeepAwake } from 'expo-keep-awake'
import './polyfills'
import App from './App'
import StorybookUIRoot from './storybook'
import config from './config'

const STORYBOOK_ENV = 'storybook'

if (__DEV__) {
	useKeepAwake()
}

if (config.ENV === STORYBOOK_ENV) {
	registerRootComponent(StorybookUIRoot)
} else {
	registerRootComponent(App)
}
