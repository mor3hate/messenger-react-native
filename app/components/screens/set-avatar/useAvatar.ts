import { errorToast, successToast } from '@/shared/toast/constants'
import { useMutation } from '@tanstack/react-query'
import { ProfileService } from '@/services/profile.service'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import Toast from 'react-native-root-toast'

export const useAvatar = (id: string, image: string) => {
	const { goBack } = useTypedNavigation()

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
	return { mutateAsync, isLoading }
}
