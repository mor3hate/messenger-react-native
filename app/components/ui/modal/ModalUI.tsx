import { FC, PropsWithChildren } from 'react'
import { Modal, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { IModal } from '@/components/ui/modal/modal.interface'

const ModalUI: FC<PropsWithChildren<IModal>> = ({
	children,
	isModalShow,
	setIsModalShow
}) => {
	return (
		<Modal
			animationType='slide'
			visible={isModalShow}
			onRequestClose={() => setIsModalShow(!isModalShow)}
		>
			<View className={'bg-gray-700 flex-1'}>
				<TouchableOpacity
					className={'pr-6 pt-12 self-end'}
					onPress={() => setIsModalShow(!isModalShow)}
				>
					<AntDesign name='closecircleo' size={34} color='white' />
				</TouchableOpacity>
				{children}
			</View>
		</Modal>
	)
}

export default ModalUI
