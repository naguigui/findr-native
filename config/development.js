import { Platform } from 'react-native'

const IOS_PLATFORM = 'ios'

export default {
	BASE_API_URL:
		Platform.OS === IOS_PLATFORM
			? 'http://localhost:3000'
			: 'http://10.0.2.2:3000',
	BASE_WS_API_URL:
		Platform.OS === IOS_PLATFORM ? 'ws://localhost:3000' : 'ws://10.0.2.2:3000',
}
