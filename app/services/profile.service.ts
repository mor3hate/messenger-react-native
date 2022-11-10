import { IChangeInfo } from '@/components/screens/change-info/change-info.interface'
import {
	IImgData,
	IPost
} from '@/components/screens/create-post/create-post.interface'
import { ImageUploadService } from './image.upload.service'
import {
	doc,
	getDocs,
	getDoc,
	addDoc,
	serverTimestamp,
	collection,
	CollectionReference,
	updateDoc
} from 'firebase/firestore'
import { usersProfileCol } from '@/firebase/createCollection'
import { updateEmail } from 'firebase/auth'
import { auth } from '@/firebase'

export const ProfileService = {
	async GetProfile(id: string) {
		return getDoc(doc(usersProfileCol, id))
	},

	async SetAvatar(id: string, data: IImgData) {
		const imagePath = await ImageUploadService.postImage(data)
		return updateDoc(doc(usersProfileCol, id), {
			photoUrl: imagePath
		})
	},

	async ChangeProfileInfo(data: IChangeInfo, id: string) {
		await updateEmail(auth.currentUser!, data.email!)
		return updateDoc(doc(usersProfileCol, id), {
			displayName: data.displayName,
			email: data.email
		})
	},

	async CreatePost(postText: string, data: IImgData, id: string) {
		const imagePath = await ImageUploadService.postImage(data)

		return addDoc(
			collection(usersProfileCol, id, 'posts') as CollectionReference<IPost>,
			{
				lastPublished: serverTimestamp(),
				postText: postText,
				postImage: imagePath
			}
		)
	},


	async GetPosts(id: string) {
		return getDocs(collection(usersProfileCol, id, 'posts') as CollectionReference<IPost>)
	},

}
