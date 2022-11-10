import { FC } from 'react'
import { View } from 'react-native'
import DismissKeyboard from '@/components/ui/form/field/DismissKeyboard'
import Button from '@/components/ui/button/Button'
import Layout from '@/components/layout/Layout'
import { useForm } from 'react-hook-form'
import { IChangeInfo } from './change-info.interface'
import ChangeInfoFields from './ChangeInfoFields'
import { useAppSelector } from '@/hooks/reduxHooks'
import { useChangeInfo } from './useChangeInfo'
import Loader from '@/components/ui/loader/Loader'

const ChangeInfo: FC = () => {
	const { control, handleSubmit } = useForm<IChangeInfo>({
		mode: 'onChange'
	})

	const { user } = useAppSelector(state => state.user)

	const { onSubmit, isLoading } = useChangeInfo(user!.uid)

	if (isLoading) return <Loader />

	return (
		<DismissKeyboard>
			<Layout title='Change info' nested>
				<View className='items-center mt-10'>
					<View className='w-[90%]'>
						<ChangeInfoFields control={control} />
						<Button
							onPress={handleSubmit(onSubmit)}
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

export default ChangeInfo
