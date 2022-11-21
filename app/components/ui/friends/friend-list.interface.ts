import { IProfileMain } from '@/components/screens/profile/profile-header/profile-header.interface'

export interface IFriendListItem extends Pick<IProfileMain, 'photoUrl' | 'displayName'> {
	id: string
}

export interface IFriendList {
	friends: IFriendListItem[]
}