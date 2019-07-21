import production from './production'
import development from './development'
import storybook from './storybook'

const environment = process.env.REACT_NATIVE_ENVIRONMENT

const envMap = {
	production,
	development,
	storybook,
}

export default envMap[environment] || development
