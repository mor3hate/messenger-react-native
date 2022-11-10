import { useMutation } from '@tanstack/react-query'
import { ProfileService } from '@/services/profile.service'
import { SubmitHandler } from 'react-hook-form'
import { IChangeInfo } from './change-info.interface'
import Toast from 'react-native-root-toast'
import { errorToast, successToast } from '@/shared/toast/constants'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

export const useChangeInfo = (id: string) => {
	const { navigate } = useTypedNavigation()

	const { mutateAsync, isLoading } = useMutation(
		['create a post'],
		(data: IChangeInfo) => ProfileService.ChangeProfileInfo(data, id),
		{
			onSuccess() {
				navigate('Auth')
				Toast.show('Profile changed successfully!', successToast)
			},
			onError(error) {
				Toast.show(String(error), errorToast)
			}
		}
	)

	const onSubmit: SubmitHandler<IChangeInfo> = async data => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
