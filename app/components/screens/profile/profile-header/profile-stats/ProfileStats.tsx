import { FC } from 'react'
import { View } from 'react-native'
import { IProfileStats } from './profile-stat.interface'
import ProfileStatItem from './ProfileStatItem'

const ProfileStats: FC<IProfileStats> = ({ stats }) => {
	return (
		<View className='flex-row justify-between w-full items-center px-7 mt-8'>
			{stats.map(stat => (
				<ProfileStatItem
					count={stat.count}
					name={stat.name}
					key={`${stat.name} stat`}
				/>
			))}
		</View>
	)
}

export default ProfileStats
