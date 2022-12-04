import { FC } from 'react'
import { Text, View } from 'react-native'
import Layout from '@/components/layout/Layout'
import Button from '@/components/ui/button/Button'
import ImagePicker from '@/components/screens/create-post/image-pick/ImagePicker'
import { useAppSelector } from '@/hooks/reduxHooks'
import { useAvatar } from './useAvatar'
import Loader from '../../ui/loaders/Loader'
import { useImage } from '@/shared/image-hook/useImage'

const SetAvatar: FC = () => {
	const {
		user: { user }
	} = useAppSelector(state => state.persistedReducer)

	const { pickImage, removeImage, image } = useImage()

	const { mutateAsync, isLoading } = useAvatar(user!.uid, image)

	if (isLoading) return <Loader size='large' />

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
					>
						<Text className={'text-white font-medium text-xl text-center'}>
							Publish
						</Text>
					</Button>
				</View>
			</View>
		</Layout>
	)
}

export default SetAvatar
