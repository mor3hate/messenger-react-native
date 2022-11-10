import { storage } from '@/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { IImgData } from './../components/screens/create-post/create-post.interface'

export const ImageUploadService = {
	async postImage(data: IImgData) {
		const image = await fetch(data.uri)
		const bytes = await image.blob()
		const imageUpload = await uploadBytes(
			ref(storage, `images/${data.path}/${data.imageTitle}`),
			bytes
		)
		return getDownloadURL(imageUpload.ref)
	}
}
