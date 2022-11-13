import { IPostGalleryItem } from '@/components/ui/posts-gallery/post-gallery.interface'

export interface IProfilePosts {
	page?: boolean
	id: string
	posts: IPostGalleryItem[]
	isLoading: boolean
}
