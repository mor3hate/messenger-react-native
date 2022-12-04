import { FC, PropsWithChildren } from 'react'
import { useProfile } from '@/components/screens/profile/useProfile'
import ChatHeader from '@/components/screens/chat/chat-header/ChatHeader'
import SendMessage from '@/components/screens/chat/SendMessage'
import { View } from 'react-native'

const ChatLayout: FC<PropsWithChildren<{ id: string }>> = ({
	children,
	id
}) => {
	const { profileInfoData } = useProfile(id)

	return (
		<View className={'flex-1'}>
			<ChatHeader
				recipientId={id}
				recipientName={
					(!profileInfoData?.displayName
						? profileInfoData?.email
						: profileInfoData?.displayName) || ''
				}
			/>
			{children}
			<SendMessage recipientId={id} />
		</View>
	)
}

export default ChatLayout
