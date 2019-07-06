import AuthService from './authService'

export const getHeader = () => {
	const accessToken = AuthService.getAccessToken()
	return {
		authorization: accessToken,
	}
}
