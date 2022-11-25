import { useMutation, useQuery } from '@tanstack/react-query'
import { AddingFriendsService } from '@/services/adding.friends.service'
import { ProfileService } from '@/services/profile.service'
import Toast from 'react-native-root-toast'
import { errorToast, successToast } from '@/shared/toast/constants'
import { removeNotifications } from '@/store/notifications/notificationsSlice'

export const useNotifications = (recipientId: string, senderId: string) => {
	const { data, isLoading: isLoadingNotif } = useQuery(
		['get profile info', senderId],
		() => ProfileService.GetProfile(senderId),
		{
			select: data => data.data(),
			enabled: !!senderId
		}
	)

	const { mutateAsync: acceptAsync, isLoading: isLoadingAccept } = useMutation(
		['accept friends request'],
		() => AddingFriendsService.AcceptRequest(recipientId, senderId),
		{
			onSuccess() {
				removeNotifications(recipientId)
				Toast.show('Request accepted!', successToast)
			},
			onError(error) {
				Toast.show(String(error), errorToast)
			}
		}
	)

	return { acceptAsync, isLoadingAccept, data, isLoadingNotif }
}
