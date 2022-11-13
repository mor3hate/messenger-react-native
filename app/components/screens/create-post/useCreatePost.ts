import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'
import { Platform } from 'react-native'
import { useMutation } from '@tanstack/react-query'
import { ProfileService } from '@/services/profile.service'
import { SubmitHandler } from 'react-hook-form'
import { IPost } from './create-post.interface'
import Toast from 'react-native-root-toast'
import { errorToast, successToast } from '@/shared/toast/constants'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

export const useCreatePost = (id: string) => {
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

	const { mutateAsync, isLoading } = useMutation(['create a post'], (data: IPost) =>
		ProfileService.CreatePost(
			data.postText,
			{
				uri: image,
				imageTitle: image,
				path: 'posts'
			},
			id
		), {
		onSuccess() {
			goBack()
			Toast.show('Post created successfully!', successToast)
		},
		onError(error) {
			Toast.show(String(error), errorToast)
		}
		}
	)

	const onSubmit: SubmitHandler<IPost> = async data => {
		await mutateAsync(data)
	}

	return { image, pickImage, removeImage, onSubmit, isLoading }
}
