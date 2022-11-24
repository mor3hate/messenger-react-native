import { FC } from 'react'
import { Text, View } from 'react-native'
import { INotificationItemUI } from '@/components/ui/notifications-ui/notification-ui.interface'
import { useQuery } from '@tanstack/react-query'
import { ProfileService } from '@/services/profile.service'
import { useAppSelector } from '@/hooks/reduxHooks'

const NotificationItem: FC<INotificationItemUI> = ({
	senderId,
	recipientId
}) => {
	const { data, refetch } = useQuery(
		['get profile info', senderId],
		() => ProfileService.GetProfile(senderId),
		{
			select: data => data.data(),
			enabled: !!senderId
		}
	)

	const {
		user: { user }
	} = useAppSelector(state => state.persistedReducer)

	return (
		<>
			{user!.uid === recipientId ? (
				<View
					className={
						'flex-row justify-between items-center bg-gray-600 p-4 rounded-2xl mt-3'
					}
				>
					<Text className={'text-base text-white'}>
						{!data?.displayName ? data?.email : data.displayName}
					</Text>
				</View>
			) : null}
		</>
	)
}

export default NotificationItem
