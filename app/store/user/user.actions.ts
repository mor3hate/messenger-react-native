import { usersCol, usersProfileCol } from '@/firebase/createCollection'
import { IUserAuth } from './../../shared/types/user.types'
import { IUserData } from './user.interface'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth'

import { doc, setDoc } from 'firebase/firestore'

import { auth } from '../../firebase/index'
import Toast from 'react-native-root-toast'
import { errorToast, successToast } from '@/shared/toast/constants'

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
					id: user.uid,
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
			Toast.show('Successfully registered', successToast)
			return response
		} catch (error) {
			Toast.show(String(error), errorToast)
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
			Toast.show('Logged in', successToast)
			return response
		} catch (error) {
			Toast.show(String(error), errorToast)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const logOut = createAsyncThunk('firebase/logout', async () => {
	await signOut(auth)
})
