import { FC } from 'react'
import { View } from 'react-native'

import { IMenu } from './nav-menu.interface'
import NavMenuItem from './NavMenuItem'

const NavMenu: FC<{ menu: IMenu }> = ({ menu: { items } }) => {
	return (
		<View className='flex-row justify-between'>
			{items.map(item => (
				<NavMenuItem name={item.name} icon={item.icon} key={item.icon} />
			))}
		</View>
	)
}

export default NavMenu
