import { FC, memo } from 'react'
import { Text, View } from 'react-native'
import { IChatMessageUI } from '@/components/ui/chat-messages/chat-messages.interface'
import { setTimeHelper } from '@/helpers/setTimeHelper'
import clsx from 'clsx'
import { useAppSelector } from '@/hooks/reduxHooks'

const ChatMessageItem: FC<IChatMessageUI> = ({ timestamp, text, from }) => {
	const {
		user: { user }
	} = useAppSelector(state => state.persistedReducer)

	return (
		<View
			className={clsx('items-end', {
				['items-start']: user!.uid !== from
			})}
		>
			<Text
				className={clsx('bg-pink py-2 px-2.5 mt-10 text-white text-lg', {
					['bg-gray-400']: user!.uid !== from
				})}
				style={{
					overflow: 'hidden',
					borderRadius: 12
				}}
			>
				{text}
			</Text>
			<Text className={'text-white opacity-40 mt-1'}>
				{setTimeHelper(timestamp)?.slice(11, 17)}
			</Text>
		</View>
	)
}

export default memo(ChatMessageItem)
