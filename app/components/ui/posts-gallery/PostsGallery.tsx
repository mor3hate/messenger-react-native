import { FC } from 'react'
import { View } from 'react-native'
import PostsGalleryItem from './PostsGalleryItem'

const PostsGallery: FC = () => {
	return (
		<View className='flex-row flex-wrap justify-between'>
			{[...Array(10).keys()].map(item => (
				<PostsGalleryItem count={item} />
			))}
		</View>
	)
}

export default PostsGallery
