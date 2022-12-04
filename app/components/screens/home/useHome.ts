import { useQuery } from '@tanstack/react-query'
import { ChatService } from '@/services/chat.service'

export const useHome = (id: string) => {
	const { data, isLoading, refetch } = useQuery(
		['get all chats for the user', id],
		() => ChatService.GetChatProfiles(id),
		{
			select: data =>
				data.docs.filter(doc => doc.data().id !== id).map(doc => doc.data())
		}
	)

	return { data, isLoading, refetch }
}
