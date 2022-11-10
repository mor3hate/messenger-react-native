import { ProfileService } from './../../../services/profile.service'
import { useQuery } from '@tanstack/react-query'

export const useProfile = (id: string) => {
	const queryData = useQuery(
		['get profile info', id],
		() => ProfileService.GetProfile(id),
		{
			select: data => data.data(),
			enabled: !!id
		}
	)
	return { ...queryData }
}
