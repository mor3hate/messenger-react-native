export interface IProfileNavItem {
	text: string
	count: number
}

export interface IProfileNav {
	navLinks: IProfileNavItem[]
}

export const profileNavMenu: IProfileNav = {
	navLinks: [
		{
			count: 1,
			text: 'Posts'
		},
		{
			count: 2,
			text: 'Stories'
		}
	]
}
