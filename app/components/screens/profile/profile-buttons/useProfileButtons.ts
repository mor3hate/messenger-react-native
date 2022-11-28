import { useMutation, useQuery } from '@tanstack/react-query'
import { ProfileService } from '@/services/profile.service'
import Toast from 'react-native-root-toast'
import { errorToast, successToast } from '@/shared/toast/constants'

export const useProfileButtons = (
	recipientId: string,
	currentUserId: string
) => {
	const { data, refetch } = useQuery(
		['get friends status'],
		() => ProfileService.GetUserFriendsStatus(currentUserId),
		{
			select: data =>
				data.docs.filter(doc => doc.data().id === recipientId).pop()
		}
	)

	const { mutateAsync, isLoading } = useMutation(
		['add a friend'],
		() => ProfileService.addToFriends(recipientId, currentUserId),
		{
			onSuccess() {
				refetch()
				Toast.show('Request sent!', successToast)
			},
			onError(error) {
				Toast.show(String(error), errorToast)
			}
		}
	)

	return { mutateAsync, isLoading, data }
}
