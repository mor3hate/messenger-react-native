import { FC } from 'react'
import { Pressable, Text, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { ILayoutHeader } from './layout-header.interface'

const LayoutHeader: FC<ILayoutHeader> = ({ title, onPress, nested }) => {
	const { goBack } = useTypedNavigation()

	return (
		<View className='pt-5 px-5'>
			{title ? (
				<View className='flex-row items-center gap-2'>
					{nested ? (
						<Pressable onPress={() => goBack()}>
							<AntDesign name='arrowleft' size={40} color='white' />
						</Pressable>
					) : (
						<AntDesign name='slack' size={24} color='gray' />
					)}
					<Text className='font-semibold text-3xl text-white'>{title}</Text>
				</View>
			) : (
				<View className='flex-row items-center justify-between'>
					<Pressable onPress={() => goBack()}>
						<AntDesign name='arrowleft' size={40} color='white' />
					</Pressable>
					<Pressable onPress={onPress}>
						<AntDesign name='ellipsis1' size={40} color='white' />
					</Pressable>
				</View>
			)}
		</View>
	)
}

export default LayoutHeader
