import { FC } from 'react'
import { Text, View } from 'react-native'
import { INotificationItemUI } from './notification-ui.interface'
import { useAppSelector } from '@/hooks/reduxHooks'
import Button from '@/components/ui/button/Button'
import { useNotifications } from '@/components/screens/friends-page/notifications/useNotifications'
import Loader from '@/components/ui/loaders/Loader'

const NotificationItem: FC<INotificationItemUI> = ({
	senderId,
	recipientId
}) => {
	const { acceptAsync, isLoadingAccept, isLoadingNotif, data } =
		useNotifications(recipientId, senderId)

	const recipientName = !data?.displayName ? data?.email : data.displayName

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
						{isLoadingNotif ? 'Loading...' : recipientName}
					</Text>
					<View className={'flex-row'}>
						<Button className='w-20 px-2 py-2' onPress={() => acceptAsync()}>
							{isLoadingAccept ? (
								<Loader size='small' />
							) : (
								<Text
									className={'text-white font-medium text-base text-center'}
								>
									Accept
								</Text>
							)}
						</Button>
						<Button className='bg-red w-20 px-2 py-2 ml-2'>
							<Text className={'text-white font-medium text-base text-center'}>
								Decline
							</Text>
						</Button>
					</View>
				</View>
			) : null}
		</>
	)
}

export default NotificationItem
