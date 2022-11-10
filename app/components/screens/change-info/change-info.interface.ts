import { IProfileMain } from '@/components/screens/profile/profile-header/profile-header.interface'

export interface IChangeInfo
	extends Pick<IProfileMain, 'displayName' | 'email'> {}
