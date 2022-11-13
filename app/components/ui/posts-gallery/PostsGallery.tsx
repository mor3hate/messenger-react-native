import { FC } from 'react'
import { View } from 'react-native'
import PostsGalleryItem from './PostsGalleryItem'
import { IPostGallery } from '@/components/ui/posts-gallery/post-gallery.interface'
import clsx from 'clsx'

const PostsGallery: FC<IPostGallery> = ({ gallery, variant }) => {
	return (
		<View
			className={clsx('flex-row flex-wrap justify-between', {
				['items-center justify-center']: variant === 'single'
			})}
		>
			{gallery.map(post => (
				<PostsGalleryItem
					key={post.id}
					isLink={variant === 'grid'}
					postText={post.postText}
					postImage={post.postImage}
					lastPublished={post.lastPublished}
					id={post.id}
				/>
			))}
		</View>
	)
}

export default PostsGallery
