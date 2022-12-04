import { FC } from 'react'

import { AntDesign } from '@expo/vector-icons'

import { IMenuItem } from './nav-menu.interface'
import { Link, useRoute } from '@react-navigation/native'
import { Pressable, View } from 'react-native'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useAppSelector } from '@/hooks/reduxHooks'

const NavMenuItem: FC<IMenuItem> = ({ name, icon }) => {
	const route = useRoute()
	const { navigate } = useTypedNavigation()

	const {
		user: { user },
		notifications: { notifications }
	} = useAppSelector(state => state.persistedReducer)

	return (
		<>
			{name === 'Profile' ? (
				<Pressable
					onPress={() =>
						navigate('Profile', {
							userId: user!.uid
						})
					}
				>
					<AntDesign
						name={icon}
						size={30}
						color={route.name === name ? 'white' : 'gray'}
					/>
				</Pressable>
			) : (
				<Link to={`/${name}`}>
					<View>
						<AntDesign
							name={icon}
							size={30}
							color={route.name === name ? 'white' : 'gray'}
						/>
						{name === 'Friends' && notifications.length !== 0 && (
							<View
								className={
									'w-2.5 h-2.5 rounded-full bg-pink absolute top-0 right-0'
								}
							/>
						)}
					</View>
				</Link>
			)}
		</>
	)
}

export default NavMenuItem
