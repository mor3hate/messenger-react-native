import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

import { getStorage } from 'firebase/storage'

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
export const storage = getStorage()
