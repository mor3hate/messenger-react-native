import { ComponentType } from 'react'

export type TypeRootStackParamList = {
	Auth: undefined
	Home: undefined
}

export type IRoute = {
	name: keyof TypeRootStackParamList
	component: ComponentType
}
