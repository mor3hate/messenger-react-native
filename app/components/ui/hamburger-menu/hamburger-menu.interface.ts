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
			name: 'Home',
			text: 'Set avatar'
		},
		{
			name: 'Auth',
			text: 'Change profile info'
		}
	]
}
