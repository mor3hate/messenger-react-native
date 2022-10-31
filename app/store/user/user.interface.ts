import { User } from 'firebase/auth'

export interface IUserData
	extends Pick<User, 'refreshToken' | 'email' | 'uid'> {}

export interface IInitialState {
	isLoading: boolean
	user: IUserData | null
}
