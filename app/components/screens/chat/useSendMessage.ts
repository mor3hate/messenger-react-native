import { Easing, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Keyboard, KeyboardEvent } from 'react-native'
import { useMutation } from '@tanstack/react-query'
import { ChatService } from '@/services/chat.service'
import { IMessage } from '@/components/screens/chat/message-interface'

export const useSendMessage = (fromId: string, toId: string) => {
	const [keyboardHeight, setKeyboardHeight] = useState(0)

	const animatedStyles = useAnimatedStyle(() => {
		return {
			paddingBottom: withTiming(keyboardHeight, {
				duration: 300,
				easing: Easing.linear
			})
		}
	})

	const onKeyboardWillShow = useCallback(
		(e: KeyboardEvent) => {
			setKeyboardHeight(e.endCoordinates.height)
		},
		[keyboardHeight]
	)

	const onKeyboardWillHide = useCallback(() => {
		setKeyboardHeight(0)
	}, [keyboardHeight])

	useEffect(() => {
		const showSub = Keyboard.addListener('keyboardWillShow', onKeyboardWillShow)
		const hideSub = Keyboard.addListener('keyboardWillHide', onKeyboardWillHide)

		return () => {
			showSub.remove()
			hideSub.remove()
		}
	})

	const { mutateAsync } = useMutation(['send a message'], (data: IMessage) =>
		ChatService.createNewChat({
			text: data.text,
			from: fromId,
			to: toId
		})
	)

	return useMemo(
		() => ({ keyboardHeight, animatedStyles, mutateAsync }),
		[keyboardHeight]
	)
}
