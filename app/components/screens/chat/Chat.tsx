import { FC, useEffect, useState } from 'react'
import ChatLayout from '@/components/layout/ChatLayout'
import { useTypedRoute } from '@/hooks/useTypedRoute'
import ChatMessageContainer from '@/components/ui/chat-messages/ChatMessageContainer'
import { useAppSelector } from '@/hooks/reduxHooks'
import {
	collection,
	CollectionReference,
	onSnapshot,
	orderBy,
	query
} from 'firebase/firestore'
import { chatCol } from '@/firebase/createCollection'
import { pairedId } from '@/helpers/pairedId'
import { IMessage } from '@/components/screens/chat/message-interface'

const Chat: FC = () => {
	const [messages, setMessages] = useState<IMessage[]>([])
	const { params } = useTypedRoute()
	const {
		user: { user }
	} = useAppSelector(state => state.persistedReducer)

	useEffect(() => {
		const unsub = onSnapshot(
			query(
				collection(
					chatCol,
					pairedId(user!.uid, params!.userId),
					'messages'
				) as CollectionReference<IMessage>,
				orderBy('timestamp', 'asc')
			),
			querySnapshot => {
				setMessages(
					querySnapshot.docs.map(doc => ({
						docId: doc.id,
						...doc.data()
					}))
				)
			}
		)

		return () => {
			unsub()
		}
	}, [])

	return (
		<ChatLayout id={params!.userId}>
			<ChatMessageContainer messages={messages} />
		</ChatLayout>
	)
}

export default Chat
