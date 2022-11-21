import PostsGallery from '@/components/ui/posts-gallery/PostsGallery'
import { FC } from 'react'
import Animated, { FadeInRight, FadeOut } from 'react-native-reanimated'
import Loader from '@/components/ui/loaders/Loader'
import { IProfilePosts } from '@/components/screens/profile/profile-posts/profile-posts.interface'

const ProfilePosts: FC<IProfilePosts> = ({ posts, isLoading, userId }) => {
	return (
		<Animated.View
			exiting={FadeOut.duration(400)}
			entering={FadeInRight.duration(500)}
			className='px-7 mt-6 pb-32'
		>
			{isLoading ? (
				<Loader size='small' />
			) : (
				<PostsGallery gallery={posts} variant='grid' userId={userId}/>
			)}
		</Animated.View>
	)
}

export default ProfilePosts
