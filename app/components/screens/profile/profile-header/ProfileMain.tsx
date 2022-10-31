import Avatar from '@/components/ui/avatar/Avatar'
import { FC } from 'react'
import { View } from 'react-native'

const ProfileMain: FC = () => {
	return (
		<View className='items-center mt-8'>
			<Avatar variant='profile' />
		</View>
	)
}

export default ProfileMain
