import { getDocs, query, where } from 'firebase/firestore'
import { usersProfileCol } from '@/firebase/createCollection'

export const SearchService = {
	async GetProfilesFromSearch(searchTerm: string) {
		return getDocs(
			query(usersProfileCol, where('displayName', '==', searchTerm))
		)
	}
}
