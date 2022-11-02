import { FC } from 'react'

import { AntDesign } from '@expo/vector-icons'

import { IMenuItem } from './nav-menu.interface'
import { Link, useRoute } from '@react-navigation/native'

const NavMenuItem: FC<IMenuItem> = ({ name, icon }) => {
	const route = useRoute()

	return (
		<Link to={`/${name}`}>
			<AntDesign
				name={icon}
				size={30}
				color={route.name === name ? 'white' : 'gray'}
			/>
		</Link>
	)
}

export default NavMenuItem
