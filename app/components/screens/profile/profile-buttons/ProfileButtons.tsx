import Button from '@/components/ui/button/Button'
import { FC } from 'react'
import { Text, View } from 'react-native'
import { IProfileButtons } from '@/components/screens/profile/profile-buttons/profile-buttons.interface'
import { useProfileButtons } from '@/components/screens/profile/profile-buttons/useProfileButtons'
import clsx from 'clsx'
import ButtonLoader from '@/components/ui/loaders/ButtonLoader'

const ProfileButtons: FC<IProfileButtons> = ({
	recipientId,
	currentUserId
}) => {
	const { mutateAsync, isLoading, data } = useProfileButtons(
		recipientId,
		currentUserId
	)

	const statusPending = data?.data().status === 'pending'
	const statusSuccess = data?.data().status === 'accepted'

	return (
		<View className='flex-row mt-6 justify-evenly items-center'>
			{!statusSuccess && (
				<Button
					disabled={statusPending}
					onPress={() => mutateAsync()}
					className={clsx({
						['bg-[#85155d]']: statusPending
					})}
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
						{isLoading ? <ButtonLoader /> : statusPending ? 'Sent' : 'Follow'}
					</Text>
				</Button>
			)}
			<Button
				className='bg-gray-600'
				style={{
					shadowColor: '#2a2b31',
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
					Message
				</Text>
			</Button>
		</View>
	)
}

export default ProfileButtons
