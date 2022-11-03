import Layout from '@/components/layout/Layout'
import Field from '@/components/ui/form/field/Field'
import { FC } from 'react'
import { View } from 'react-native'
import { useForm } from 'react-hook-form'
import { IPost } from './create-post.interface'
import DismissKeyboard from '@/components/ui/form/field/DismissKeyboard'
import Button from '@/components/ui/button/Button'
import { useCreatePost } from './useCreatePost'
import ImagePicker from './image-pick/ImagePicker'

const CreatePost: FC = () => {
	const { control, handleSubmit, reset } = useForm<IPost>({
		mode: 'onChange'
	})

	const { image, pickImage, removeImage } = useCreatePost()

	return (
		<DismissKeyboard>
			<Layout title='Create new post' nested>
				<View className='items-center mt-10'>
					<View className='w-[90%]'>
						<Field<IPost>
							control={control}
							placeholderTextColor={'gray'}
							multiline={true}
							name='postText'
							className='h-48'
							placeholder='Enter your thoughts...'
							rules={{
								required: 'Post can not be empty',
								maxLength: {
									value: 200,
									message: 'Post can only be 200 characters length'
								}
							}}
						/>

						<ImagePicker
							image={image}
							onPress={pickImage}
							onDelete={removeImage}
						/>

						<Button
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
		</DismissKeyboard>
	)
}

export default CreatePost
