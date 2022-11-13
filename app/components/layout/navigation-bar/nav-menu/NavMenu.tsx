import { FC } from 'react'
import { Pressable, View } from 'react-native'

import { IMenu } from './nav-menu.interface'
import NavMenuItem from './NavMenuItem'
import ProfileMenuNavItem from '@/components/layout/navigation-bar/nav-menu/ProfileMenuNavItem'
import { AntDesign } from '@expo/vector-icons'

const NavMenu: FC<{ menu: IMenu }> = ({ menu: { items } }) => {
	return (
		<View className='flex-row justify-between'>
			<ProfileMenuNavItem />
			{items.map(item => (
				<NavMenuItem name={item.name} icon={item.icon} key={item.icon} />
			))}
		</View>
	)
}

export default NavMenu
