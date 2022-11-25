import { FC, PropsWithChildren } from 'react'
import { Pressable } from 'react-native'
import { IButton } from './button.interface'
import clsx from 'clsx'

const Button: FC<PropsWithChildren<IButton>> = ({
	className,
	children,
	...rest
}) => {
	return (
		<Pressable
			{...rest}
			className={clsx('bg-pink rounded-xl py-4 px-5 w-32', className)}
		>
			{children}
		</Pressable>
	)
}

export default Button
