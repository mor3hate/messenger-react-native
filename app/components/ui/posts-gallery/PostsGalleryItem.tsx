import { FC } from 'react'
import { Text, View } from 'react-native'

const PostsGalleryItem: FC<{ count: number }> = ({ count }) => {
	return (
		<View className='bg-navbar rounded-xl w-[150px] min-h-[100px] max-h-[200px] mb-5'>
			<Text>{count}</Text>
		</View>
	)
}

export default PostsGalleryItem
