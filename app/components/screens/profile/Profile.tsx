import Layout from '@/components/layout/Layout'
import Loader from '../../ui/loaders/Loader'
import ProfileNav from '@/components/ui/profile-nav/ProfileNav'
import { useAppSelector } from '@/hooks/reduxHooks'
import { FC, useCallback, useState } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import ProfileButtons from './profile-buttons/ProfileButtons'
import ProfileMain from './profile-header/ProfileMain'
import { useProfile } from './useProfile'
import ProfilePosts from './profile-posts/ProfilePosts'
import ProfileStories from './profile-stories/ProfileStories'
import { useTypedRoute } from '@/hooks/useTypedRoute'

const Profile: FC = () => {
	const { params } = useTypedRoute()
	const [refreshing, setRefreshing] = useState(false)

	const {
		profileNav: { index },
		user: { user }
	} = useAppSelector(state => state)

	const {
		profileInfoData,
		isLoading,
		postsData,
		refetchPosts,
		refetchInfo,
		isLoadingPosts
	} = useProfile(params!.userId)

	const onRefresh = useCallback(() => {
		setRefreshing(true)
		refetchInfo().then(() => refetchPosts().then(() => setRefreshing(false)))
	}, [])

	if (isLoading) return <Loader size='large' />

	return (
		<Layout nested={false}>
			<View>
				<ScrollView
					refreshControl={
						<RefreshControl
							refreshing={refreshing}
							onRefresh={onRefresh}
							title='Pull up to refresh'
						/>
					}
				>
					<ProfileMain info={profileInfoData!} />
					{profileInfoData?.email !== user?.email && <ProfileButtons />}
					<ProfileNav />
					{index === 1 ? (
						<ProfilePosts
							page={false}
							id={params!.userId}
							posts={postsData || []}
							isLoading={isLoadingPosts}
						/>
					) : (
						<ProfileStories />
					)}
				</ScrollView>
			</View>
		</Layout>
	)
}

export default Profile
