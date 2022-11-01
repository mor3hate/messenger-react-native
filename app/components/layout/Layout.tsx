import { FC, PropsWithChildren, useState } from 'react'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import NavigationBar from './navigation-bar/NavigationBar'

import LayoutHeader from '../ui/layout-header/LayoutHeader'
import HamburgerMenu from '../ui/hamburger-menu/HamburgerMenu'

const Layout: FC<PropsWithChildren<{ title?: string }>> = ({
	children,
	title
}) => {
	const [show, setIsShow] = useState(false)

	return (
		<SafeAreaView className='flex-1 relative'>
			<LayoutHeader title={title} onPress={() => setIsShow(!show)} />
			{show && <HamburgerMenu />}
			<View>{children}</View>
			<NavigationBar />
		</SafeAreaView>
	)
}

export default Layout
