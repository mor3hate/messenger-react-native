import Layout from '@/components/layout/Layout'
import Loader from '../../ui/loaders/Loader'
import ProfileNav from '@/components/ui/profile-nav/ProfileNav'
import { FC, useCallback, useState } from 'react'
import { RefreshControl, ScrollView, View } from 'react-native'
import ProfileButtons from './profile-buttons/ProfileButtons'
import ProfileMain from './profile-header/ProfileMain'
import { useProfile } from './useProfile'
import ProfilePosts from './profile-posts/ProfilePosts'
import ProfileStories from './profile-stories/ProfileStories'
import { useTypedRoute } from '@/hooks/useTypedRoute'
import { useAppSelector } from '@/hooks/reduxHooks'

const Profile: FC = () => {
	const { params } = useTypedRoute()
	const [refreshing, setRefreshing] = useState(false)

	const {
		user: { user }
	} = useAppSelector(state => state.persistedReducer)
	const { index } = useAppSelector(state => state.profileNav)

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
					{profileInfoData?.email !== user?.email && (
						<ProfileButtons
							recipientId={params!.userId}
							currentUserId={user!.uid}
						/>
					)}
					<ProfileNav />
					{index === 1 ? (
						<ProfilePosts
							userId={params!.userId}
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
