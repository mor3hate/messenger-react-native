import { FC } from 'react'
import { View, Image } from 'react-native'
import { IAvatar } from './avatar-interface'

import clsx from 'clsx'

const Avatar: FC<IAvatar> = ({ photoUrl, variant }) => {
	return (
		<View
			className={clsx(
				'bg-navbar w-36 h-36 rounded-full items-center justify-center relative',
				{
					['w-24 h-24']: variant === 'small' || variant === 'stories',
					['border-4 border-pink']: variant === 'stories'
				}
			)}
			style={{
				shadowColor: '#000',
				shadowOffset: {
					width: 0,
					height: 1
				},
				shadowOpacity: 0.22,
				shadowRadius: 2.22,

				elevation: 3
			}}
		>
			<Image
				source={photoUrl ? photoUrl : require('../../../../assets/user.png')}
				style={{
					resizeMode: 'center'
				}}
				className={clsx('rounded-full w-28 h-28', {
					['w-20 h-20']: variant === 'small' || variant === 'stories'
				})}
			/>
			{variant !== 'small' && (
				<View
					className={clsx(
						'w-[135px] h-[135px] rounded-full border-[5px] border-black absolute',
						{
							['w-[90px] h-[90px]']: variant === 'stories'
						}
					)}
				></View>
			)}
		</View>
	)
}

export default Avatar
