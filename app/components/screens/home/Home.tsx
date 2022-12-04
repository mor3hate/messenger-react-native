import Layout from '@/components/layout/Layout'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { FC } from 'react'
import { View } from 'react-native'
import { useAppSelector } from '@/hooks/reduxHooks'
import { useHome } from '@/components/screens/home/useHome'
import Loader from '@/components/ui/loaders/Loader'
import ChatHomeMessageContainer from '@/components/ui/chat-home-messages/ChatHomeMessageContainer'
import SearchField from '@/components/ui/search/SearchField'
import { useSearch } from '@/hooks/useSearch'

const Home: FC = () => {
	const { navigate } = useTypedNavigation()
	const {
		user: { user }
	} = useAppSelector(state => state.persistedReducer)

	const { data, isLoading } = useHome(user!.uid)
	const { handleSearch, searchTerm } = useSearch()

	return (
		<Layout title='Chats' nested={false}>
			{isLoading ? (
				<Loader size='large' className={'mt-20'} />
			) : (
				<View className={'mt-10 h-full'}>
					<SearchField
						searchTerm={searchTerm}
						onChange={handleSearch}
						placeholder='Search for chats'
					/>
					{searchTerm ? (
						<ChatHomeMessageContainer
							chats={
								data?.filter(item =>
									item.displayName.includes(searchTerm.toString())
								) || []
							}
						/>
					) : (
						<ChatHomeMessageContainer chats={data || []} />
					)}
				</View>
			)}
		</Layout>
	)
}

export default Home
