import { FC } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { IFriendListItem } from '@/components/ui/friends/friend-list.interface'
import Avatar from '@/components/ui/avatar/Avatar'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const FriendsListItem: FC<IFriendListItem> = ({
	id,
	photoUrl,
	displayName
}) => {
	const { navigate } = useTypedNavigation()

	return (
		<TouchableOpacity
			className={'flex-row items-center mt-7'}
			onPress={() =>
				navigate('Profile', {
					userId: id
				})
			}
		>
			<Avatar photoUrl={photoUrl} variant='small' />
			<Text className='text-lg font-medium text-white ml-5'>
				{!displayName ? 'Guest' : displayName}
			</Text>
		</TouchableOpacity>
	)
}

export default FriendsListItem
