import { User } from 'firebase/auth'

export interface IUserData extends Pick<User, 'email' | 'uid'> {}

export interface IInitialState {
	isLoading: boolean
	user: IUserData | null
}
