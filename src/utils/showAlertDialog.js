import { Alert } from 'react-native'

export const showAlertDialog = ({
	alertTitle,
	alertMessage,
	cancelText = 'Cancel',
	approveText = 'Ok',
	onApprove,
}) => {
	Alert.alert(
		alertTitle,
		alertMessage,
		[
			{
				text: cancelText,
				style: 'cancel',
			},
			{ text: approveText, onPress: onApprove },
		],
		{ cancelable: false },
	)
}
