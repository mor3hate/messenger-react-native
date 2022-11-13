import { AntDesign } from '@expo/vector-icons'
import { AntIconName } from './../../../../shared/types/icon.types'
import { IRoute } from './../../../../navigation/navigation.types'

export interface IMenuItem extends Pick<IRoute, 'name'> {
	icon: typeof AntDesign[AntIconName]
}

export interface IMenu {
	items: IMenuItem[]
}

export const menu: IMenu = {
	items: [
		{
			icon: 'message1',
			name: 'Home'
		},
		{
			icon: 'adduser',
			name: 'AddFriends'
		},
		{
			icon: 'team',
			name: 'Friends'
		},
		{
			icon: 'setting',
			name: 'Settings'
		}
	]
}
