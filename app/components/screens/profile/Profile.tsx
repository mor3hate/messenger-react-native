import Layout from '@/components/layout/Layout'
import Loader from '@/components/ui/loader/Loader'
import ProfileNav from '@/components/ui/profile-nav/ProfileNav'
import { useAppSelector } from '@/hooks/reduxHooks'
import { FC } from 'react'
import { View, ScrollView } from 'react-native'
import ProfileButtons from './profile-buttons/ProfileButtons'
import ProfileMain from './profile-header/ProfileMain'
import { useProfile } from './useProfile'
import ProfilePosts from './profile-posts/ProfilePosts'
import ProfileStories from './profile-stories/ProfileStories'

const Profile: FC = () => {
	const { user } = useAppSelector(state => state.user)

	const { index } = useAppSelector(state => state.profileNav)

	const { data, isLoading } = useProfile(user?.uid!)

	if (isLoading) return <Loader />

	return (
		<Layout>
			<View>
				<ScrollView>
					<ProfileMain info={data!} />
					{data?.email !== user?.email && <ProfileButtons />}
					<ProfileNav />
					{index === 1 ? <ProfilePosts /> : <ProfileStories />}
				</ScrollView>
			</View>
		</Layout>
	)
}

export default Profile
