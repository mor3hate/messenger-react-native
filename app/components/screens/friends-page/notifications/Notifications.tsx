import { FC } from 'react'
import { useAppSelector } from '@/hooks/reduxHooks'
import NotificationItem from './NotificationItem'
import { Text, View } from 'react-native'

const Notifications: FC = () => {
	const {
		notifications: { notifications }
	} = useAppSelector(state => state.persistedReducer)

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
