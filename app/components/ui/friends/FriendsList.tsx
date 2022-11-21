import { FC } from 'react'
import { IFriendList } from '@/components/ui/friends/friend-list.interface'
import FriendsListItem from '@/components/ui/friends/FriendsListItem'
import Animated, { FadeInUp } from 'react-native-reanimated'

const FriendsList: FC<IFriendList> = ({ friends }) => {
	return (
		<Animated.View className={'mb-6 px-3'} entering={FadeInUp.duration(500)}>
			{friends.map(friend => (
				<FriendsListItem
					id={friend.id}
					photoUrl={friend.photoUrl}
					displayName={friend.displayName}
				/>
			))}
		</Animated.View>
	)
}

export default FriendsList
