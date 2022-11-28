import { useActions } from '@/hooks/useActions'
import { useQuery } from '@tanstack/react-query'
import { AddingFriendsService } from '@/services/adding.friends.service'

export const useFriendsPage = (currentUserId: string) => {
	const { addNotification } = useActions()

	useQuery(
		['get all friends status'],
		() => AddingFriendsService.GetUserFriendsStatusPending(currentUserId),
		{
			onSuccess(data) {
				addNotification(
					data.docs.map(doc => ({
						recipientId: doc.data().id,
						senderId: currentUserId
					}))
				)
			}
		}
	)

	const { data } = useQuery(
		['get all friends on page'],
		() => AddingFriendsService.GetUserFriends(currentUserId),
		{
			select: data => data.docs.map(doc => doc.data())
		}
	)

	return { data }
}
