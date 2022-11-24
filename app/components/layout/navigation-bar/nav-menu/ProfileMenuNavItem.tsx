import { FC } from 'react'
import { Pressable } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useAppSelector } from '@/hooks/reduxHooks'

const ProfileMenuNavItem: FC = () => {
	const { navigate } = useTypedNavigation()
	const {
		user: { user }
	} = useAppSelector(state => state.persistedReducer)

	return (
		<Pressable
			className='self-center'
			onPress={() =>
				navigate('Profile', {
					userId: user!.uid
				})
			}
		>
			<AntDesign name='smileo' size={30} color='gray' />
		</Pressable>
	)
}

export default ProfileMenuNavItem
