import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Animated from 'react-native-reanimated'
import { TouchableOpacity, View } from 'react-native'
import Field from '@/components/ui/form/field/Field'
import clsx from 'clsx'
import { AntDesign } from '@expo/vector-icons'
import { useSendMessage } from '@/components/screens/chat/useSendMessage'
import { useAppSelector } from '@/hooks/reduxHooks'
import { IMessage } from '@/components/screens/chat/message-interface'

const SendMessage: FC<{ recipientId: string }> = ({ recipientId }) => {
	const { control, handleSubmit, reset } = useForm<IMessage>({
		mode: 'onChange'
	})

	const {
		user: { user }
	} = useAppSelector(state => state.persistedReducer)

	const { animatedStyles, keyboardHeight, mutateAsync } = useSendMessage(
		user!.uid,
		recipientId
	)

	const onSubmit: SubmitHandler<IMessage> = async data => {
		reset()
		await mutateAsync(data)
	}

	const [textHeight, setTextHeight] = useState(0)

	return (
		<Animated.View
			style={animatedStyles}
			className={clsx('mt-auto', {
				['mb-4']: keyboardHeight === 0
			})}
		>
			<View className={'flex-row items-center justify-between px-2'}>
				<Field<IMessage>
					control={control}
					name='text'
					placeholder='Enter message...'
					multiline={true}
					className={'w-[280px]'}
					onContentSizeChange={e =>
						setTextHeight(e.nativeEvent.contentSize.height)
					}
					style={{ height: Math.max(35, textHeight) }}
				/>
				<TouchableOpacity
					className={clsx({
						['self-end pb-3']: textHeight > 35
					})}
					onPress={handleSubmit(onSubmit)}
				>
					<AntDesign name='message1' size={30} color='white' />
				</TouchableOpacity>
			</View>
		</Animated.View>
	)
}

export default SendMessage
