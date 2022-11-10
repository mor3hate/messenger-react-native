import { IPost } from '@/components/screens/create-post/create-post.interface'

export interface IPostGalleryItem extends IPost {
	isLink?: boolean
}

export interface IPostGallery {
	gallery: IPostGalleryItem[]
	variant: 'grid' | 'single'
}
