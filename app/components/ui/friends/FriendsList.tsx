import { FC } from 'react'
import {View} from 'react-native'
import { IFriendList } from '@/components/ui/friends/friend-list.interface'
import FriendsListItem from '@/components/ui/friends/FriendsListItem'


const FriendsList: FC<IFriendList> = ({ friends }) => {
	return (
		<View className={'mb-6 px-3'}>
			{friends.map(friend => (
				<FriendsListItem
					id={friend.id}
					photoUrl={friend.photoUrl}
					displayName={friend.displayName}
				/>
			))}
		</View>
	)
}

export default FriendsList
