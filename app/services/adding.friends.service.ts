import {
	collection,
	doc,
	getDocs,
	query,
	updateDoc,
	where
} from 'firebase/firestore'
import { usersCol } from '@/firebase/createCollection'

export const AddingFriendsService = {
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
	}
}
