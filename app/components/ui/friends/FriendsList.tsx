import { FC } from 'react'
import { ScrollView } from 'react-native'
import { IFriendList } from '@/components/ui/friends/friend-list.interface'
import FriendsListItem from '@/components/ui/friends/FriendsListItem'

const FriendsList: FC<IFriendList> = ({ friends }) => {
	return (
		<ScrollView className={'mb-6 px-3'}>
			{friends.map(friend => (
				<FriendsListItem
					key={friend.id}
					id={friend.id}
					photoUrl={friend.photoUrl}
					displayName={friend.displayName}
				/>
			))}
		</ScrollView>
	)
}

export default FriendsList
