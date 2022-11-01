import { FC } from 'react'
import { Pressable, Text } from 'react-native'
import { IButton } from './button.interface'
import clsx from 'clsx'

const Button: FC<IButton> = ({ className, title, ...rest }) => {
	return (
		<Pressable
			{...rest}
			className={clsx('bg-pink rounded-xl py-4 px-5 w-32', className)}
		>
			<Text className='text-white font-medium text-xl text-center'>
				{title}
			</Text>
		</Pressable>
	)
}

export default Button
