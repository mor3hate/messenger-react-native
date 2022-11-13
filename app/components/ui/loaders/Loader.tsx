import { FC } from 'react'
import { ActivityIndicator, View, Text, ActivityIndicatorProps } from 'react-native'
import { loaderArray } from './loader-text-array'

const Loader: FC<ActivityIndicatorProps> = ({...rest}) => (
	<View className='flex-1 justify-center bg-gray-700'>
		<ActivityIndicator color='#e3229e' {...rest}/>
		<Text className='text-center text-white text-lg font-semibold mt-2'>
			{loaderArray[Math.floor(Math.random() * loaderArray.length)]}
		</Text>
	</View>
)

export default Loader
