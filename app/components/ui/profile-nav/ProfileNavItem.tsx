import { useAppSelector } from '@/hooks/reduxHooks'
import { useActions } from '@/hooks/useActions'
import { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Animated, { FadeIn } from 'react-native-reanimated'
import { IProfileNavItem } from './profile-nav.interface'

const ProfileNavItem: FC<IProfileNavItem> = ({ text, count }) => {
	const { setIndex } = useActions()

	const { index } = useAppSelector(state => state.profileNav)

	return (
		<TouchableOpacity onPress={() => setIndex(count)} className='h-9'>
			<Text className='text-white font-semibold text-xl'>{text}</Text>
			{count === index && (
				<Animated.View
					entering={FadeIn.duration(400)}
					className='w-2 h-2 bg-pink rounded-full self-center'
				></Animated.View>
			)}
		</TouchableOpacity>
	)
}

export default ProfileNavItem
