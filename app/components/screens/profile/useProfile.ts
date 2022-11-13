import { ProfileService } from './../../../services/profile.service'
import { useQuery } from '@tanstack/react-query'

export const useProfile = (id: string) => {
	const {
		data: profileInfoData,
		isLoading,
		refetch: refetchInfo
	} = useQuery(['get profile info', id], () => ProfileService.GetProfile(id), {
		select: data => data.data(),
		enabled: !!id
	})

	const {
		data: postsData,
		refetch: refetchPosts,
		isLoading: isLoadingPosts
	} = useQuery(['get posts', id], () => ProfileService.GetPosts(id), {
		select: data =>
			data.docs.map(doc => ({
				lastPublished: doc.data().lastPublished,
				postImage: doc.data().postImage,
				postText: doc.data().postText,
				id: doc.id
			})),
		enabled: !!id
	})
	return {
		profileInfoData,
		isLoading,
		postsData,
		refetchPosts,
		refetchInfo,
		isLoadingPosts
	}
}
