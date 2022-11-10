import { IRoute } from '@/navigation/navigation.types'

export interface IHamburgerMenuItem extends Pick<IRoute, 'name'> {
	text: string
}

export interface IHamburgerMenu {
	items: IHamburgerMenuItem[]
}

export const hamburgerMenu: IHamburgerMenu = {
	items: [
		{
			name: 'SetAvatar',
			text: 'Set avatar'
		},
		{
			name: 'ChangeInfo',
			text: 'Change profile info'
		},
		{
			name: 'CreatePost',
			text: 'Create new post'
		}
	]
}
