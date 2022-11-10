import { FC } from 'react'
import { View } from 'react-native'
import Layout from '@/components/layout/Layout'
import Button from '@/components/ui/button/Button'
import ImagePicker from '@/components/screens/create-post/image-pick/ImagePicker'
import { useAppSelector } from '@/hooks/reduxHooks'
import { useAvatar } from './useAvatar'
import Loader from '@/components/ui/loader/Loader'

const SetAvatar: FC = () => {
	const { user } = useAppSelector(state => state.user)

	const { image, pickImage, removeImage, mutateAsync, isLoading } = useAvatar(
		user!.uid
	)

	if (isLoading) return <Loader />

	return (
		<Layout title='Set your avatar' nested>
			<View className='items-center mt-10'>
				<View className='w-[90%]'>
					<ImagePicker
						image={image}
						onPress={pickImage}
						onDelete={removeImage}
					/>

					<Button
						onPress={() => mutateAsync()}
						title='Publish'
						className='mx-auto mt-10'
						style={{
							shadowColor: '#e3229e',
							shadowOffset: {
								width: 0,
								height: 9
							},
							shadowOpacity: 0.5,
							shadowRadius: 12.35,

							elevation: 19
						}}
					/>
				</View>
			</View>
		</Layout>
	)
}

export default SetAvatar
