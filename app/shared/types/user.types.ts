export interface IUser {
	id: string
	email: string
	password: string
}

export interface IUserAuth extends Pick<IUser, 'email' | 'password'> {}
