import PostsGallery from '@/components/ui/posts-gallery/PostsGallery'
import { FC } from 'react'
import Animated, { FadeInRight, FadeOut } from 'react-native-reanimated'

const ProfilePosts: FC = () => {
	return (
		<Animated.View
			exiting={FadeOut.duration(400)}
			entering={FadeInRight.duration(500)}
			className='px-7 mt-6 pb-32'
		>
			<PostsGallery />
		</Animated.View>
	)
}

export default ProfilePosts
