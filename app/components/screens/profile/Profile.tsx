import Layout from '@/components/layout/Layout'
import { FC } from 'react'
import { Text, View } from 'react-native'
import ProfileMain from './profile-header/ProfileMain'

const Profile: FC = () => {
	return (
		<Layout title='Your profile'>
			<View>
				<ProfileMain />
			</View>
		</Layout>
	)
}

export default Profile
