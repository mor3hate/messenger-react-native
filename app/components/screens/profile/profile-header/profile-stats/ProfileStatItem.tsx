import { convertNumber } from '@/helpers/convertNumbers'
import { FC } from 'react'
import { View, Text } from 'react-native'
import { IProfileStatItem } from './profile-stat.interface'

const ProfileStatItem: FC<IProfileStatItem> = ({ count, name }) => {
	return (
		<View className='items-center'>
			<Text className='text-white font-semibold text-xl'>
				{convertNumber(count)}
			</Text>
			<Text className='text-gray-400 text-lg capitalize font-medium'>
				{name}
			</Text>
		</View>
	)
}

export default ProfileStatItem
