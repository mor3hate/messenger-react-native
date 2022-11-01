import Layout from '@/components/layout/Layout'
import Loader from '@/components/ui/loader/Loader'
import { useAppSelector } from '@/hooks/reduxHooks'
import { FC } from 'react'
import { View, ScrollView, Text } from 'react-native'
import ProfileButtons from './profile-buttons/ProfileButtons'
import ProfileMain from './profile-header/ProfileMain'
import { useProfile } from './useProfile'

const Profile: FC = () => {
	const { user } = useAppSelector(state => state.user)

	const { data, isLoading } = useProfile(user?.uid!)

	if (isLoading) return <Loader />

	return (
		<Layout>
			<View>
				<ProfileMain info={data!} />
				{data?.email !== user?.email && <ProfileButtons />}
			</View>
		</Layout>
	)
}

export default Profile
