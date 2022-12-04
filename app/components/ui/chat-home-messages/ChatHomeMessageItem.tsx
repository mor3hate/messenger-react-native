import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { FC } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Avatar from '@/components/ui/avatar/Avatar'
import { IChatHomeMessageItem } from '@/components/ui/chat-home-messages/chat-home-messages.interface'
import { useAppSelector } from '@/hooks/reduxHooks'
import { useQuery } from '@tanstack/react-query'
import { ChatService } from '@/services/chat.service'

const ChatHomeMessageItem: FC<IChatHomeMessageItem> = ({
	photoUrl,
	displayName,
	id
}) => {
	const { navigate } = useTypedNavigation()
	const {
		user: { user }
	} = useAppSelector(state => state.persistedReducer)

	const { data: message } = useQuery(
		['get last message'],
		() => ChatService.GetLastMessage(user!.uid, id || ''),
		{
			select: data => data.docs.map(doc => doc.data()).pop()
		}
	)

	return (
		<TouchableOpacity
			onPress={() =>
				navigate('Chat', {
					userId: id || ''
				})
			}
			className={'flex-row items-center px-6 py-4 w-[75%]'}
		>
			<Avatar photoUrl={photoUrl} variant='small' />
			<View className={'ml-5'}>
				<Text className={'text-white text-xl font-medium'}>{displayName}</Text>
				<Text
					className={'text-white opacity-50 text-base mt-4'}
					numberOfLines={1}
				>
					{message?.text}
				</Text>
			</View>
		</TouchableOpacity>
	)
}

export default ChatHomeMessageItem
