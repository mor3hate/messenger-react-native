import { FC, memo } from 'react'
import { Text, View } from 'react-native'
import Layout from '@/components/layout/Layout'
import SearchField from '@/components/ui/search/SearchField'
import { useSearch } from '@/hooks/useSearch'
import FriendsList from '@/components/ui/friends/FriendsList'
import DismissKeyboard from '@/components/ui/form/field/DismissKeyboard'

const AddFriends: FC = () => {
	const { handleSearch, searchTerm, data, isSuccess } = useSearch()

	return (
		<DismissKeyboard>
			<Layout nested title='Add friends'>
				<View className={'mt-12'}>
					<SearchField searchTerm={searchTerm} onChange={handleSearch} />
					{isSuccess ? (
						<FriendsList friends={data || []} />
					) : (
						<Text className={'text-white text-center mt-3'}>
							No users found!
						</Text>
					)}
				</View>
			</Layout>
		</DismissKeyboard>
	)
}

export default memo(AddFriends)
