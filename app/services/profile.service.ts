import { IChangeInfo } from '@/components/screens/change-info/change-info.interface'
import {
	IImgData,
	IPost
} from '@/components/screens/create-post/create-post.interface'
import { ImageUploadService } from './image.upload.service'
import {
	addDoc,
	collection,
	CollectionReference,
	doc,
	getDoc,
	getDocs,
	serverTimestamp,
	updateDoc
} from 'firebase/firestore'
import { usersCol, usersProfileCol } from '@/firebase/createCollection'
import { updateEmail } from 'firebase/auth'
import { auth } from '@/firebase'
import { IFriend } from '@/shared/types/friends.types'

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
		if (data.email) {
			await updateEmail(auth.currentUser!, data.email!)
			return updateDoc(doc(usersProfileCol, id), {
				displayName: data.displayName,
				email: data.email || auth.currentUser?.email
			})
		} else {
			return updateDoc(doc(usersProfileCol, id), {
				displayName: data.displayName
			})
		}
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
		return getDocs(
			collection(usersProfileCol, id, 'posts') as CollectionReference<IPost>
		)
	},

	async addToFriends(recipientId: string, currentUserId: string) {
		await addDoc(
			collection(
				usersCol,
				currentUserId,
				'friends'
			) as CollectionReference<IFriend>,
			{
				status: 'pending',
				id: recipientId
			}
		)
		await addDoc(
			collection(
				usersCol,
				recipientId,
				'friends'
			) as CollectionReference<IFriend>,
			{
				status: 'pending',
				id: currentUserId
			}
		)
	},
	async GetUserFriendsStatus(currentUserId: string) {
		return getDocs(
			collection(
				usersCol,
				currentUserId,
				'friends'
			) as CollectionReference<IFriend>
		)
	}
}
