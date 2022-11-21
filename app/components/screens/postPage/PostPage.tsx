import { FC } from 'react'
import { ScrollView, View } from 'react-native'
import Layout from '@/components/layout/Layout'
import PostsGallery from '@/components/ui/posts-gallery/PostsGallery'
import { useProfile } from '@/components/screens/profile/useProfile'
import { useTypedRoute } from '@/hooks/useTypedRoute'
import Loader from '@/components/ui/loaders/Loader'


const PostPage: FC = () => {
	const { params } = useTypedRoute()
	const {
		postsData,
		isLoadingPosts
	} = useProfile(params!.userId)

	return (
		<Layout nested title='Posts'>
			{isLoadingPosts ? <Loader size='small' /> :
				<View style={{ paddingBottom: 130, marginTop: 30 }}>
					<ScrollView>
						<PostsGallery gallery={postsData || []} variant='single' userId={params!.userId} />
					</ScrollView>
				</View>
			}
		</Layout>
	)
}

export default PostPage