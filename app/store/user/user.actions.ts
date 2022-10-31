import { IUserAuth } from './../../shared/types/user.types'
import { IUserData } from './user.interface'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut
} from 'firebase/auth'

import { setDoc, doc, serverTimestamp } from 'firebase/firestore'

import { auth, db } from '../../firebase/index'

export const register = createAsyncThunk<IUserData, IUserAuth>(
	'firebase/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			).then(({ user }) => {
				setDoc(doc(db, 'users', user.uid), {
					uid: user.uid,
					name: user.displayName,
					photoUrl: user.photoURL,
					email: user.email,
					lastSeen: serverTimestamp()
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
