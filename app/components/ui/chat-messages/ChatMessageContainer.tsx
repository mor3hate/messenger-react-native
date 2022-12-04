import { FC, useCallback } from 'react'
import {
	IChatMessages,
	IChatMessageUI
} from '@/components/ui/chat-messages/chat-messages.interface'
import ChatMessageItem from '@/components/ui/chat-messages/ChatMessageItem'
import { AutoScrollFlatList } from 'react-native-autoscroll-flatlist'

const ChatMessageContainer: FC<IChatMessages> = ({ messages }) => {
	const renderItem = useCallback(({ item }: { item: IChatMessageUI }) => {
		return (
			<ChatMessageItem
				docId={item.docId}
				text={item.text}
				from={item.from}
				timestamp={item.timestamp}
			/>
		)
	}, [])

	const keyExtractor = useCallback((item: IChatMessageUI) => item.docId, [])

	return (
		<AutoScrollFlatList
			showsVerticalScrollIndicator={false}
			className={'px-2'}
			threshold={20}
			data={messages}
			renderItem={renderItem}
			//@ts-ignore
			keyExtractor={keyExtractor}
			maxToRenderPerBatch={8}
			windowSize={11}
		/>
	)
}

export default ChatMessageContainer
