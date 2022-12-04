import { FC, useCallback } from 'react'
import { FlatList } from 'react-native'
import {
	IChatHomeMessageContainer,
	IChatHomeMessageItem
} from '@/components/ui/chat-home-messages/chat-home-messages.interface'
import ChatHomeMessageItem from '@/components/ui/chat-home-messages/ChatHomeMessageItem'

const ChatHomeMessageContainer: FC<IChatHomeMessageContainer> = ({ chats }) => {
	const renderItem = useCallback(({ item }: { item: IChatHomeMessageItem }) => {
		return (
			<ChatHomeMessageItem
				displayName={item.displayName}
				photoUrl={item.photoUrl}
				id={item.id}
			/>
		)
	}, [])

	const keyExtractor = useCallback((item: IChatHomeMessageItem) => item.id, [])

	return (
		<FlatList
			data={chats}
			renderItem={renderItem}
			//@ts-ignore
			keyExtractor={keyExtractor}
			maxToRenderPerBatch={8}
			windowSize={11}
		/>
	)
}

export default ChatHomeMessageContainer
