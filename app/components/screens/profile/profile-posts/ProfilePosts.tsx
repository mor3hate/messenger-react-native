import PostsGallery from '@/components/ui/posts-gallery/PostsGallery'
import { FC } from 'react'
import Animated, { FadeInRight, FadeOut } from 'react-native-reanimated'
import Loader from '@/components/ui/loaders/Loader'
import Layout from '@/components/layout/Layout'
import { IPost } from '@/components/screens/create-post/create-post.interface'
import { IPostGalleryItem } from '@/components/ui/posts-gallery/post-gallery.interface'
import { IProfilePosts } from '@/components/screens/profile/profile-posts/profile-posts.interface'

const ProfilePosts: FC<IProfilePosts> = ({ page = true, posts, isLoading }) => {
	return (
		<>
			{page ? (
				<Layout nested title='All Posts'>
					{isLoading ? (
						<Loader size='large' />
					) : (
						<PostsGallery gallery={posts} variant='single' />
					)}
				</Layout>
			) : (
				<Animated.View
					exiting={FadeOut.duration(400)}
					entering={FadeInRight.duration(500)}
					className='px-7 mt-6 pb-32'
				>
					{isLoading ? (
						<Loader size='small' />
					) : (
						<PostsGallery gallery={posts} variant='grid' />
					)}
				</Animated.View>
			)}
		</>
	)
}

export default ProfilePosts
