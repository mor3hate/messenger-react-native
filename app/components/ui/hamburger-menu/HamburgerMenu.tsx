import { FC } from 'react'
import Animated, { FadeIn, LightSpeedOutRight } from 'react-native-reanimated'

const HamburgerMenu: FC = () => {
	return (
		<Animated.View
			className='bg-white p-6 h-28 w-28 rounded-xl absolute top-[110px] right-8'
			entering={FadeIn}
			exiting={LightSpeedOutRight.duration(700)}
			style={{
				zIndex: 2,
				elevation: 50
			}}
		></Animated.View>
	)
}

export default HamburgerMenu
