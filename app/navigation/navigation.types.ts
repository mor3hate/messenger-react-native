import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Auth: undefined
	Home: undefined
	AddFriends: undefined
	Profile: { userId: string }
	Friends: undefined
	Settings: undefined
	Posts: {userId: string}
	Stories: undefined
	CreatePost: undefined
	SetAvatar: undefined
	ChangeInfo: undefined
}

export type IRoute = {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
