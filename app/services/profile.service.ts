import { db, usersProfileCol } from './../firebase/index'
import { doc, getDoc } from 'firebase/firestore'

export const ProfileService = {
	async GetProfile(id: string) {
		return getDoc(doc(usersProfileCol, id))
	}
}
