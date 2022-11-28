import { FC } from 'react'
import NotificationItem from './NotificationItem'
import { Text, View } from 'react-native'
import { INotifications } from '@/store/notifications/notifications.interface'

const Notifications: FC<INotifications> = ({ notifications }) => {
	return (
		<View className={'p-6'}>
			{notifications.length !== 0 ? (
				notifications.map(notif => (
					<NotificationItem
						senderId={notif.senderId}
						recipientId={notif.recipientId}
						key={notif.recipientId}
					/>
				))
			) : (
				<Text className={'text-white text-lg text-center'}>
					All is clear...
				</Text>
			)}
		</View>
	)
}

export default Notifications
