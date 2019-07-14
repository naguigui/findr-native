import production from './production'
import development from './development'

const environment = process.env.REACT_NATIVE_ENVIRONMENT

const envMap = {
	production,
	development,
}

export default envMap[environment] || development
