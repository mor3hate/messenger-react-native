import {
	collection,
	deleteDoc,
	doc,
	getDocs,
	query,
	updateDoc,
	where
} from 'firebase/firestore'
import { usersCol, usersProfileCol } from '@/firebase/createCollection'

export const AddingFriendsService = {
	async GetUserFriendsStatusPending(currentUserId: string) {
		return getDocs(
			query(
				collection(usersCol, currentUserId, 'friends'),
				where('status', '==', 'pending'),
				where('receiver', '==', true)
			)
		)
	},
	async GetUserFriends(currentUserId: string) {
		const friendsIds = await getDocs(
			query(
				collection(usersCol, currentUserId, 'friends'),
				where('status', '==', 'accepted')
			)
		)

		return getDocs(
			query(
				usersProfileCol,
				where(
					'id',
					'in',
					friendsIds.docs.map(item => item.data().id)
				)
			)
		)
	},
	async AcceptRequest(recipientId: string, senderId: string) {
		const recipientDocumentId = await getDocs(
			query(
				collection(usersCol, recipientId, 'friends'),
				where('id', '==', senderId)
			)
		)

		const senderDocumentId = await getDocs(
			query(
				collection(usersCol, senderId, 'friends'),
				where('id', '==', recipientId)
			)
		)

		await updateDoc(
			doc(
				collection(usersCol, recipientId, 'friends'),
				String(recipientDocumentId.docs.map(doc => doc.id))
			),
			{
				status: 'accepted',
				id: senderId
			}
		)

		await updateDoc(
			doc(
				collection(usersCol, senderId, 'friends'),
				String(senderDocumentId.docs.map(doc => doc.id))
			),
			{
				status: 'accepted',
				id: recipientId
			}
		)
	},

	async DeclineRequest(recipientId: string, senderId: string) {
		const recipientDocumentId = await getDocs(
			query(
				collection(usersCol, recipientId, 'friends'),
				where('id', '==', senderId)
			)
		)

		const senderDocumentId = await getDocs(
			query(
				collection(usersCol, senderId, 'friends'),
				where('id', '==', recipientId)
			)
		)

		await deleteDoc(
			doc(
				collection(usersCol, recipientId, 'friends'),
				String(recipientDocumentId.docs.map(doc => doc.id))
			)
		)

		await deleteDoc(
			doc(
				collection(usersCol, senderId, 'friends'),
				String(senderDocumentId.docs.map(doc => doc.id))
			)
		)
	}
}
