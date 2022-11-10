import { FC } from 'react'
import { View } from 'react-native'
import PostsGalleryItem from './PostsGalleryItem'
import { IPostGallery } from '@/components/ui/posts-gallery/post-gallery.interface'

const PostsGallery: FC<IPostGallery> = ({ gallery, variant }) => {
	return (
		<View className='flex-row flex-wrap justify-between'>
			{gallery.map(post => (
				<PostsGalleryItem
					isLink={variant === 'grid'}
					postText={post.postText}
					postImage={post.postImage}
					lastPublished={post.lastPublished}
				/>
			))}
		</View>
	)
}

export default PostsGallery
