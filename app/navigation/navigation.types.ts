import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Auth: undefined
	Home: undefined
	AddFriends: undefined
	Profile: undefined
	Friends: undefined
	Settings: undefined
}

export type IRoute = {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
