import { FC } from 'react'
import { View } from 'react-native'
import { profileNavMenu } from './profile-nav.interface'
import ProfileNavItem from './ProfileNavItem'

const ProfileNav: FC = () => {
	return (
		<View className='flex-row items-center px-7 mt-10 w-4/6 justify-between'>
			{profileNavMenu.navLinks.map(link => (
				<ProfileNavItem
					count={link.count}
					text={link.text}
					key={`${link.text} profileNav`}
				/>
			))}
		</View>
	)
}

export default ProfileNav
