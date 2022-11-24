import { FC } from 'react'
import Layout from '@/components/layout/Layout'
import { Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useAppSelector } from '@/hooks/reduxHooks'

const FriendsPage: FC = () => {
	const {
		notifications: { notifications }
	} = useAppSelector(state => state.persistedReducer)

	return (
		<Layout title='Friends' nested={false}>
			<TouchableOpacity
				className={'flex-row items-center justify-center gap-2 mt-6 relative'}
			>
				<Text className={'text-white text-2xl font-medium'}>Notifications</Text>
				<AntDesign name='right' size={24} color='white' />
				<View
					className={
						'w-4 h-4 rounded-full bg-pink items-center absolute left-[61%] top-0'
					}
				>
					<Text className={'text-white'}>{notifications.length}</Text>
				</View>
			</TouchableOpacity>
		</Layout>
	)
}

export default FriendsPage
