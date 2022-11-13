import { FC, useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { Link } from '@react-navigation/native'
// @ts-ignore
import CachedImage from 'expo-cached-image'
import { IPostGalleryItem } from '@/components/ui/posts-gallery/post-gallery.interface'
import SkeletonLoading from '@/components/ui/loaders/SkeletonLoader'

const PostsGalleryItem: FC<IPostGalleryItem> = ({
	postImage,
	postText,
	lastPublished,
	isLink,
	id
}) => {
	return (
		<>
			{isLink ? (
				<Link
					to={'/Posts'}
					style={{
						marginBottom: 10
					}}
				>
					<CachedImage
						source={{
							uri: postImage
						}}
						cacheKey={`${id}`}
						placeholderContent={
							<SkeletonLoading width={150} height={200} borderRadius={12} />
						}
						className='w-[150px] min-h-[200px] max-h-[400px] rounded-xl'
						resizeMode='cover'
					/>
				</Link>
			) : (
				<View className='w-[90%] mb-5'>
					<CachedImage
						source={{
							uri: postImage
						}}
						cacheKey={`${id}`}
						placeholderContent={
							<SkeletonLoading width={300} height={200} borderRadius={12} />
						}
						className='w-full min-h-[200px] max-h-[400px] rounded-xl'
						resizeMode='cover'
					/>
					<Text className='text-white text-lg mt-3'>{postText}</Text>
				</View>
			)}
		</>
	)
}

export default PostsGalleryItem

// <Image
// 	source={{ uri: postImage }}
// 	fadeDuration={300}
// 	className='w-[150px] min-h-[200px] max-h-[400px] rounded-xl'
// 	style={{
// 		resizeMode: 'cover'
// 	}}
// ></Image>
