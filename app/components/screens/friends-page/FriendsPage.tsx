import { FC, useState } from 'react'
import Layout from '@/components/layout/Layout'
import { Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useAppSelector } from '@/hooks/reduxHooks'
import Notifications from './notifications/Notifications'
import ModalUI from '@/components/ui/modal/ModalUI'

const FriendsPage: FC = () => {
	const {
		notifications: { notifications }
	} = useAppSelector(state => state.persistedReducer)

	const [isModalShow, setIsModalShow] = useState(false)

	return (
		<Layout title='Friends' nested={false}>
			<TouchableOpacity
				className={'flex-row items-center justify-center gap-2 mt-6 relative'}
				onPress={() => setIsModalShow(true)}
			>
				<Text className={'text-white text-2xl font-medium'}>Notifications</Text>
				<AntDesign name='right' size={24} color='white' />
				{notifications.length !== 0 && (
					<View
						className={
							'w-4 h-4 rounded-full bg-pink items-center absolute left-[61%] top-0'
						}
					>
						<Text className={'text-white'}>{notifications.length}</Text>
					</View>
				)}
			</TouchableOpacity>
			<ModalUI isModalShow={isModalShow} setIsModalShow={setIsModalShow}>
				<Notifications />
			</ModalUI>
		</Layout>
	)
}

export default FriendsPage
