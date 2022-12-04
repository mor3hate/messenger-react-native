import { IMessage } from '@/components/screens/chat/message-interface'
import {
	addDoc,
	arrayUnion,
	collection,
	CollectionReference,
	doc,
	getDocs,
	orderBy,
	query,
	serverTimestamp,
	updateDoc,
	where
} from 'firebase/firestore'
import { chatCol, usersProfileCol } from '@/firebase/createCollection'
import { pairedId } from '@/helpers/pairedId'
import { ProfileService } from '@/services/profile.service'

export const ChatService = {
	async createNewChat(data: IMessage) {
		return addDoc(
			collection(
				chatCol,
				pairedId(data.from, data.to),
				'messages'
			) as CollectionReference<IMessage>,
			{
				from: data.from,
				to: data.to,
				text: data.text,
				timestamp: serverTimestamp()
			}
		).then(() => {
			updateDoc(doc(usersProfileCol, data.from), {
				chats: arrayUnion(pairedId(data.from, data.to))
			})
			updateDoc(doc(usersProfileCol, data.to), {
				chats: arrayUnion(pairedId(data.from, data.to))
			})
		})
	},

	async GetChatProfiles(id: string) {
		return ProfileService.GetProfile(id).then(res =>
			getDocs(query(usersProfileCol, where('chats', '==', res.data()?.chats)))
		)
	},

	async GetLastMessage(from: string, to: string) {
		return getDocs(
			query(
				collection(chatCol, pairedId(from, to), 'messages'),
				orderBy('timestamp', 'asc')
			)
		)
	}
}
