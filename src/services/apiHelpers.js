import AuthService from './authService'

export const getHeader = () => {
	const accessToken = AuthService.getAccessToken()
	if (accessToken) {
		return {
			authorization: accessToken,
		}
	}
	return null
}
