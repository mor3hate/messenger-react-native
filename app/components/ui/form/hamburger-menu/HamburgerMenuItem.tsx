import { Link } from '@react-navigation/native'
import { FC } from 'react'
import { Text } from 'react-native'
import { IHamburgerMenuItem } from './hamburger-menu.interface'

const HamburgerMenuItem: FC<IHamburgerMenuItem> = ({ name, text }) => {
	return (
		<Link
			to={`/${name}`}
			style={{
				marginBottom: 10
			}}
		>
			<Text className='text-lg font-medium'>{text}</Text>
		</Link>
	)
}

export default HamburgerMenuItem
