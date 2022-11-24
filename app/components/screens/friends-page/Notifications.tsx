import { FC } from 'react'
import { useAppSelector } from '@/hooks/reduxHooks'
import NotificationItem from '@/components/ui/notifications-ui/NotificationItem'
import { View } from 'react-native'

const Notifications: FC = () => {
	const {
		notifications: { notifications }
	} = useAppSelector(state => state.persistedReducer)
	return (
		<View>
			{notifications.map(notif => (
				<NotificationItem
					senderId={notif.senderId}
					recipientId={notif.recipientId}
					key={notif.recipientId}
				/>
			))}
		</View>
	)
}

export default Notifications
