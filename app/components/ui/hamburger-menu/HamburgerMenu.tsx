import { FC } from 'react'
import Animated, { FadeIn, LightSpeedOutRight } from 'react-native-reanimated'
import { IHamburgerMenu } from './hamburger-menu.interface'
import HamburgerMenuItem from './HamburgerMenuItem'

const HamburgerMenu: FC<{ menu: IHamburgerMenu }> = ({ menu: { items } }) => {
	return (
		<Animated.View
			className='bg-white px-6 py-4 rounded-xl absolute top-[110px] right-8'
			entering={FadeIn}
			exiting={LightSpeedOutRight.duration(700)}
			style={{
				zIndex: 2,
				elevation: 50
			}}
		>
			{items.map(el => (
				<HamburgerMenuItem
					name={el.name}
					text={el.text}
					key={`${el.name} hamburger`}
				/>
			))}
		</Animated.View>
	)
}

export default HamburgerMenu
