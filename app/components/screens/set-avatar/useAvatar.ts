import { errorToast, successToast } from './../../../shared/toast/constants'
import { useMemo, useState } from 'react'
import { Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { useMutation } from '@tanstack/react-query'
import { ProfileService } from '@/services/profile.service'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import Toast from 'react-native-root-toast'

export const useAvatar = (id: string) => {
	const [image, setImage] = useState('')

	const { goBack } = useTypedNavigation()

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

	const { mutateAsync, isLoading } = useMutation(
		['set a avatar'],
		() =>
			ProfileService.SetAvatar(id, {
				uri: image,
				imageTitle: image,
				path: 'avatars'
			}),
		{
			onSuccess() {
				goBack()
				Toast.show('Avatar changed successfully!', successToast)
			},
			onError(error) {
				Toast.show(String(error), errorToast)
			}
		}
	)
	return useMemo(
		() => ({ image, pickImage, removeImage, mutateAsync, isLoading }),
		[image, removeImage, mutateAsync]
	)
}
