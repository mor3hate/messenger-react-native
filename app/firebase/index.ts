import { IProfileMain } from './../components/screens/profile/profile-header/profile-header.interface'
import { IUserData } from './../store/user/user.interface'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {
	collection,
	getFirestore,
	CollectionReference,
	DocumentData
} from 'firebase/firestore'

import {
	REACT_FIREBASE_API_KEY,
	REACT_FIREBASE_AUTH_DOMAIN,
	REACT_FIREBASE_PROJECT_ID,
	REACT_FIREBASE_STORAGE_BUCKET,
	REACT_FIREBASE_SENDER_ID,
	REACT_FIREBASE_APP_ID
} from '@env'

export const app = initializeApp({
	apiKey: REACT_FIREBASE_API_KEY,

	authDomain: REACT_FIREBASE_AUTH_DOMAIN,

	projectId: REACT_FIREBASE_PROJECT_ID,

	storageBucket: REACT_FIREBASE_STORAGE_BUCKET,

	messagingSenderId: REACT_FIREBASE_SENDER_ID,

	appId: REACT_FIREBASE_APP_ID
})

export const auth = getAuth(app)
export const db = getFirestore(app)

const createCollection = <T = DocumentData>(collectionName: string) => {
	return collection(db, collectionName) as CollectionReference<T>
}

export const usersCol = createCollection<IUserData>('users')
export const usersProfileCol = createCollection<IProfileMain>('profile')
