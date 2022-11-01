import Button from '@/components/ui/button/Button'
import { FC, useEffect, useState } from 'react'
import { Pressable, Text, View } from 'react-native'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IUserAuth } from '@/shared/types/user.types'
import AuthFields from './AuthFields'
import DismissKeyboard from '@/components/ui/form/field/DismissKeyboard'
import { useActions } from '@/hooks/useActions'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useAppSelector } from '@/hooks/reduxHooks'
import Loader from '@/components/ui/loader/Loader'

const Auth: FC = () => {
	const [isReg, setReg] = useState(false)

	const { navigate } = useTypedNavigation()

	const { user, isLoading } = useAppSelector(state => state.user)

	const { register, login } = useActions()

	const { control, handleSubmit, reset } = useForm<IUserAuth>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IUserAuth> = data => {
		if (isReg) {
			register(data)
		} else {
			login(data)
		}
		reset()
	}

	useEffect(() => {
		if (user) {
			navigate('Home')
		} else {
			navigate('Auth')
		}
	}, [user])

	if (isLoading) return <Loader />

	return (
		<DismissKeyboard>
			<View className='items-center justify-center mx-2 h-full'>
				<View className='w-9/12'>
					<Text className='text-white text-4xl font-bold text-shadow text-center mb-3'>
						{isReg ? 'Register' : 'Login'}
					</Text>

					<AuthFields control={control} />

					<Button
						title="Let's go!"
						onPress={handleSubmit(onSubmit)}
						className='mx-auto mt-6'
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

					<Pressable
						className='self-center mt-6'
						onPress={() => setReg(!isReg)}
					>
						<Text className='text-gray-400 font-semibold text-xl'>
							{!isReg ? 'New to us? Register' : 'Already in system? Login'}
						</Text>
					</Pressable>
				</View>
			</View>
		</DismissKeyboard>
	)
}

export default Auth
