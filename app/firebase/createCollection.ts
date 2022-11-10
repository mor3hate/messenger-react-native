import { IProfileMain } from '@/components/screens/profile/profile-header/profile-header.interface'
import { IUserData } from '@/store/user/user.interface'
import {
	collection,
	CollectionReference,
	DocumentData
} from 'firebase/firestore'
import { db } from './index'

const createCollection = <T = DocumentData>(collectionName: string) => {
	return collection(db, collectionName) as CollectionReference<T>
}

export const usersCol = createCollection<IUserData>('users')
export const usersProfileCol = createCollection<IProfileMain>('profile')

