import { FC } from 'react'
import { Pressable } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { IMenuItem } from './nav-menu.interface'
import { useRoute } from '@react-navigation/native'

const NavMenuItem: FC<IMenuItem> = ({ name, icon }) => {
	const { navigate } = useTypedNavigation()

	const route = useRoute()

	return (
		<Pressable onPress={() => navigate(name)}>
			<AntDesign
				name={icon}
				size={30}
				color={route.name === name ? 'white' : 'gray'}
			/>
		</Pressable>
	)
}

export default NavMenuItem
