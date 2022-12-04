import { useMutation } from '@tanstack/react-query'
import { ProfileService } from '@/services/profile.service'
import { SubmitHandler } from 'react-hook-form'
import { IPost } from './create-post.interface'
import Toast from 'react-native-root-toast'
import { errorToast, successToast } from '@/shared/toast/constants'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

export const useCreatePost = (id: string, image: string) => {
	const { goBack } = useTypedNavigation()

	const { mutateAsync, isLoading } = useMutation(
		['create a post'],
		(data: IPost) =>
			ProfileService.CreatePost(
				data.postText,
				{
					uri: image,
					imageTitle: image,
					path: 'posts'
				},
				id
			),
		{
			onSuccess() {
				goBack()
				Toast.show('Post created successfully!', successToast)
			},
			onError(error) {
				Toast.show(String(error), errorToast)
			}
		}
	)

	const onSubmit: SubmitHandler<IPost> = async data => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
