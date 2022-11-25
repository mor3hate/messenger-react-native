import { FC } from 'react'
import { Image, Text, View } from 'react-native'
import Button from '@/components/ui/button/Button'
import { IImagePicker } from './image-picker.interface'
import { AntDesign } from '@expo/vector-icons'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'

const ImagePicker: FC<IImagePicker> = ({ onPress, image, onDelete }) => {
	return (
		<View className='flex-row items-center mt-5 h-28'>
			<Button
				className='bg-gray-600 w-1/2'
				style={{
					shadowColor: '#2a2b31',
					shadowOffset: {
						width: 0,
						height: 9
					},
					shadowOpacity: 0.5,
					shadowRadius: 12.35,

					elevation: 19
				}}
				onPress={onPress}
			>
				<Text className={'text-white font-medium text-xl text-center'}>
					Choose image
				</Text>
			</Button>
			{image && (
				<Animated.View className='relative' entering={FadeIn} exiting={FadeOut}>
					<Image
						source={{ uri: image }}
						className='w-28 h-28 rounded-xl ml-12'
					/>
					<AntDesign
						name='closecircle'
						size={24}
						color='white'
						style={{
							position: 'absolute',
							right: -10,
							top: -5
						}}
						onPress={onDelete}
					/>
				</Animated.View>
			)}
		</View>
	)
}

export default ImagePicker
