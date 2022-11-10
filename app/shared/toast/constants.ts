import { ToastOptions } from 'react-native-root-toast'

export const successToast: ToastOptions = {
	duration: 3500,
	position: 40,
	shadow: true,
	animation: true,
	hideOnPress: true,
	opacity: 0.9,
	textStyle: {
		fontSize: 20,
		fontWeight: '600'
	},
	delay: 0,
	backgroundColor: '#0ee874',
	containerStyle: {
		padding: 20,
		borderRadius: 16
	}
}

export const errorToast: ToastOptions = {
	...successToast,
	backgroundColor: '#FF0000'
}
