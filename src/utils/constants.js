import { Dimensions, Platform, StatusBar } from 'react-native'

export const IS_PLATFORM_IOS = Platform.OS === 'ios'
export const IS_PLATFORM_ANDROID = Platform.OS === 'android'
export const ANDROID_STATUS_BAR_HEIGHT = StatusBar.currentHeight

export const SCREEN_WIDTH = Dimensions.get('window').width
export const SCREEN_HEIGHT = Dimensions.get('window').height
