import { FC } from 'react'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { IChatHeader } from '@/components/screens/chat/chat-header/chat-header.interface'

const ChatHeader: FC<IChatHeader> = ({ recipientId, recipientName }) => {
	const { goBack, navigate } = useTypedNavigation()

	return (
		<View className={'flex-row px-3 pt-12 items-center justify-between'}>
			<Pressable onPress={() => goBack()}>
				<AntDesign name='arrowleft' size={40} color='white' />
			</Pressable>
			<TouchableOpacity
				onPress={() =>
					navigate('Profile', {
						userId: recipientId
					})
				}
			>
				<Text className={'text-white font-medium text-lg'}>
					{recipientName}
				</Text>
			</TouchableOpacity>
		</View>
	)
}

export default ChatHeader
