import { FC, PropsWithChildren } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import NavigationBar from './navigation-bar/NavigationBar'

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
	children,
	title
}) => {
	return (
		<SafeAreaView className='flex-1 relative'>
			<Text className='font-semibold text-3xl text-white text-center'>
				{title}
			</Text>
			<View>{children}</View>
			<NavigationBar />
		</SafeAreaView>
	)
}

export default Layout
