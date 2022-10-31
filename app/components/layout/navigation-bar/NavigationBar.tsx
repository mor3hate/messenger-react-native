import { FC } from 'react'
import { View } from 'react-native'

import { menu } from './nav-menu/nav-menu.interface'
import NavMenu from './nav-menu/NavMenu'

const NavigationBar: FC = () => {
	return (
		<View
			className='absolute bottom-5 py-3 px-8 bg-navbar w-11/12 rounded-3xl h-20 self-center justify-center'
			style={{
				shadowColor: '#000',
				shadowOffset: {
					width: 0,
					height: 3
				},
				shadowOpacity: 0.29,
				shadowRadius: 4.65,
				elevation: 7
			}}
		>
			<NavMenu menu={menu} />
		</View>
	)
}

export default NavigationBar
