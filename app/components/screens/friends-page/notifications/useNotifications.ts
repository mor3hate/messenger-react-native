import { useMutation, useQuery } from '@tanstack/react-query'
import { AddingFriendsService } from '@/services/adding.friends.service'
import { ProfileService } from '@/services/profile.service'
import Toast from 'react-native-root-toast'
import { errorToast, successToast } from '@/shared/toast/constants'
import { useActions } from '@/hooks/useActions'

export const useNotifications = (recipientId: string, senderId: string) => {
	const { removeNotifications } = useActions()

	const { data, isLoading: isLoadingNotif } = useQuery(
		['get profile info', recipientId],
		() => ProfileService.GetProfile(recipientId),
		{
			select: data => data.data(),
			enabled: !!recipientId
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

	const { mutateAsync: declineAsync, isLoading: isLoadingDecline } =
		useMutation(
			['delcine friends request'],
			() => AddingFriendsService.DeclineRequest(recipientId, senderId),
			{
				onSuccess() {
					removeNotifications(recipientId)
					Toast.show('Request declined!', successToast)
				},
				onError(error) {
					Toast.show(String(error), errorToast)
				}
			}
		)

	return {
		acceptAsync,
		isLoadingAccept,
		data,
		isLoadingNotif,
		declineAsync,
		isLoadingDecline
	}
}
