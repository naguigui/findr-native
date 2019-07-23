import { registerRootComponent } from 'expo'
import KeepAwake from 'expo-keep-awake'
import './polyfills'
import App from './App'
import StorybookUIRoot from './storybook'
import config from './config'

const STORYBOOK_ENV = 'storybook'

if (__DEV__) {
	KeepAwake.activate()
}

if (config.ENV === STORYBOOK_ENV) {
	registerRootComponent(StorybookUIRoot)
} else {
	registerRootComponent(App)
}
