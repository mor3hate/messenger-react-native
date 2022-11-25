import Layout from '@/components/layout/Layout'
import Button from '@/components/ui/button/Button'
import { useActions } from '@/hooks/useActions'
import { FC } from 'react'
import { Text, View } from 'react-native'

const SettingsPage: FC = () => {
	const { logOut } = useActions()

	return (
		<Layout title='Settings' nested={false}>
			<View className='items-center mt-20'>
				<Button
					onPress={() => logOut()}
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
						Logout
					</Text>
				</Button>
			</View>
		</Layout>
	)
}

export default SettingsPage
