import Button from '@/components/ui/button/Button'
import { FC } from 'react'
import { View } from 'react-native'
import { IProfileButtons } from '@/components/screens/profile/profile-buttons/profile-buttons.interface'
import { useProfileButtons } from '@/components/screens/profile/profile-buttons/useProfileButtons'
import clsx from 'clsx'

const ProfileButtons: FC<IProfileButtons> = ({
	recipientId,
	currentUserId
}) => {
	const { mutateAsync, isSuccess, data } = useProfileButtons(
		recipientId,
		currentUserId
	)

	const statusPending = data?.data().status === 'pending'
	const statusSuccess = data?.data().status === 'success'

	return (
		<View className='flex-row mt-6 justify-evenly items-center'>
			{!statusSuccess && (
				<Button
					title={statusPending ? 'Sent' : 'Follow'}
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
				/>
			)}
			<Button
				title='Message'
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
			/>
		</View>
	)
}

export default ProfileButtons
