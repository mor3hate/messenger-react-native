import Button from '@/components/ui/button/Button'
import { FC } from 'react'
import { View } from 'react-native'

const ProfileButtons: FC = () => {
	return (
		<View className='flex-row mt-6 justify-evenly items-center'>
			<Button
				title='Follow'
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
