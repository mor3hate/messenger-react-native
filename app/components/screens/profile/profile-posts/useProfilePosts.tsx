import { useQuery } from '@tanstack/react-query'
import { ProfileService } from '@/services/profile.service'
import { useMemo } from 'react'

export const useProfilePosts = (id: string) => {
	const postData = useQuery(
		['get posts', id],
		() => ProfileService.GetPosts(id),
		{
			select: data => data.docs.map(doc => doc.data()),
			enabled: !!id
		}
	)

	return { ...postData }
}
