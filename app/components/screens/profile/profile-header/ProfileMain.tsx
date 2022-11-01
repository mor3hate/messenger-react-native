import Avatar from '@/components/ui/avatar/Avatar'
import { FC } from 'react'
import { View, Text } from 'react-native'
import { IProfileMain } from './profile-header.interface'
import ProfileStats from './profile-stats/ProfileStats'

const ProfileMain: FC<{ info: IProfileMain }> = ({ info }) => {
	return (
		<View className='items-center'>
			<Avatar variant='profile' photoUrl={info.photoUrl} />
			<Text className='text-white text-3xl font-semibold mt-5'>
				{!info.displayName ? 'Guest' : info.displayName}
			</Text>
			<Text className='text-gray-600 text-xl font-medium'>{info.email}</Text>
			<ProfileStats stats={info.stats} />
		</View>
	)
}

export default ProfileMain
