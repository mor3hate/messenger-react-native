import { FC} from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
// @ts-ignore
import CachedImage from 'expo-cached-image'
import { IPostGalleryItem } from '@/components/ui/posts-gallery/post-gallery.interface'
import SkeletonLoading from '@/components/ui/loaders/SkeletonLoader'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { setTimeHelper } from '@/helpers/setTimeHelper'

const PostsGalleryItem: FC<IPostGalleryItem> = ({
	postImage,
	postText,
	lastPublished,
	isLink,
	id,
	userId
}) => {
	const { navigate } = useTypedNavigation()
	return (
		<>
			{isLink ? (
				<TouchableOpacity
					onPress={() => navigate('Posts', {
						userId: userId || ''
					})}
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
				</TouchableOpacity>
			) : (
				<View className='w-[90%] mb-12'>
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
					<Text className={'text-white text-base opacity-70 mt-1'}>{setTimeHelper(lastPublished)}</Text>
					<View className='bg-gray-600 p-4 rounded-2xl mt-3'>
						<Text className='text-white text-lg'>{postText}</Text>
					</View>
				</View>
			)}
		</>
	)
}

export default PostsGalleryItem


