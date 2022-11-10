import { FC, useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { Link } from '@react-navigation/native'
import { IPostGalleryItem } from '@/components/ui/posts-gallery/post-gallery.interface'

const PostsGalleryItem: FC<IPostGalleryItem> = ({
	postImage,
	postText,
	lastPublished,
	isLink
}) => {
	return (
		<>
			{isLink ? (
				<Image
					source={{ uri: postImage }}
					fadeDuration={300}
					className='w-[150px] min-h-[200px] max-h-[400px] rounded-xl'
					style={{
						resizeMode: 'cover'
					}}
				></Image>
			) : (
				<View></View>
			)}
		</>
	)
}

export default PostsGalleryItem
