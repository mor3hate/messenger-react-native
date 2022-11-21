import { IPostGalleryItem } from '@/components/ui/posts-gallery/post-gallery.interface'

export interface IProfilePosts {
	userId: string
	posts: IPostGalleryItem[]
	isLoading: boolean
}
