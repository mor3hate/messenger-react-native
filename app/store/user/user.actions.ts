import { usersCol, usersProfileCol } from '@/firebase/createCollection'
import { IUserAuth } from './../../shared/types/user.types'
import { IUserData } from './user.interface'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth'

import { setDoc, doc, serverTimestamp } from 'firebase/firestore'

import { auth } from '../../firebase/index'

export const register = createAsyncThunk<IUserData, IUserAuth>(
	'firebase/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			).then(({ user }) => {
				setDoc(doc(usersCol, user.uid), {
					email: user.email,
					uid: user.uid
				})
				setDoc(doc(usersProfileCol, user.uid), {
					displayName: '',
					email: user.email,
					photoUrl: '',
					stats: [
						{
							name: 'posts',
							count: 0
						},
						{
							name: 'friends',
							count: 0
						},
						{
							name: 'stories',
							count: 0
						}
					]
				})
				return user
			})
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IUserData, IUserAuth>(
	'firebase/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await signInWithEmailAndPassword(
				auth,
				email,
				password
			).then(({ user }) => {
				return user
			})
			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logOut = createAsyncThunk('firebase/logout', async () => {
	await signOut(auth)
})
