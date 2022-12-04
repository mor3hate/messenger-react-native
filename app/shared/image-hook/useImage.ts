import { Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { useMemo, useState } from 'react'

export const useImage = () => {
	const [image, setImage] = useState('')

	const pickImage = async () => {
		if (Platform.OS !== 'web') {
			const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
			if (status !== 'granted') {
				alert('Sorry, we need camera roll permissions to make this work!')
				return
			}
		}
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1
		})
		if (!result.cancelled) {
			setImage(result.uri)
		}
	}

	const removeImage = () => {
		setImage('')
	}

	return useMemo(() => ({ image, pickImage, removeImage }), [image])
}
