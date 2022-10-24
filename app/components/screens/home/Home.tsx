import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

const Home: FC = () => {
	const { navigate } = useTypedNavigation()
	return (
		<View>
			<Pressable onPress={() => navigate('Auth')} className='p-12'>
				<Text className='text-white'>Home</Text>
			</Pressable>
		</View>
	)
}

export default Home
