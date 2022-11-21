import { IPost } from '@/components/screens/create-post/create-post.interface'

export interface IPostGalleryItem extends IPost {
	userId?: string
	isLink?: boolean
	id: string
}

export interface IPostGallery {
	userId: string
	gallery: IPostGalleryItem[]
	variant: 'grid' | 'single'
}
