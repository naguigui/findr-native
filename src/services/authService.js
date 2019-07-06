import * as SecureStore from 'expo-secure-store'
import client from '../graphql/client'

const ACCESS_TOKEN_NAME = 'titan_access_token'

class AuthService {
	constructor(accessToken = null) {
		this[ACCESS_TOKEN_NAME] = accessToken
	}

	initFromStorage = async () => {
		this[ACCESS_TOKEN_NAME] = await SecureStore.getItemAsync(ACCESS_TOKEN_NAME)
	}

	authenticate = async (accessToken) => {
		await SecureStore.setItemAsync(ACCESS_TOKEN_NAME, accessToken)
		this[ACCESS_TOKEN_NAME] = accessToken
		client.resetStore()
	}

	deauthenticate = async () => {
		await SecureStore.deleteItemAsync(ACCESS_TOKEN_NAME)
		this[ACCESS_TOKEN_NAME] = null
	}

	getAccessToken = () => {
		return this[ACCESS_TOKEN_NAME]
	}
	isAuthenticated = () => {
		const token = this.getAccessToken()
		if (token) {
			return true
		}
		return false
	}
}

const AuthServiceInstance = new AuthService()

export { AuthService as AuthServiceClass }

export default AuthServiceInstance
