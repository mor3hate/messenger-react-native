import PostsGallery from '@/components/ui/posts-gallery/PostsGallery'
import { FC } from 'react'
import Animated, { FadeInRight, FadeOut } from 'react-native-reanimated'
import { useAppSelector } from '@/hooks/reduxHooks'
import { useProfilePosts } from '@/components/screens/profile/profile-posts/useProfilePosts'
import Loader from '@/components/ui/loader/Loader'

const ProfilePosts: FC = () => {
	const { user } = useAppSelector(state => state.user)

	const { data, isLoading } = useProfilePosts(user?.uid!)

	return (
		<Animated.View
			exiting={FadeOut.duration(400)}
			entering={FadeInRight.duration(500)}
			className='px-7 mt-6 pb-32'
		>
			{isLoading ? (
				<Loader />
			) : (
				<PostsGallery gallery={data || []} variant='grid' />
			)}
		</Animated.View>
	)
}

export default ProfilePosts
