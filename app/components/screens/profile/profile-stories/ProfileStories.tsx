import { FC } from 'react'
import { Text } from 'react-native'
import Animated, { FadeInRight, FadeOut } from 'react-native-reanimated'

const ProfileStories: FC = () => {
	return (
		<Animated.View
			exiting={FadeOut.duration(400)}
			entering={FadeInRight.duration(500)}
			className='px-7 mt-6'
		>
			<Text className='text-white'>ProfileStories</Text>
		</Animated.View>
	)
}

export default ProfileStories
