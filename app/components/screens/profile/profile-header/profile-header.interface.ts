import { IProfileStats } from './profile-stats/profile-stat.interface'

export interface IProfileMain extends IProfileStats {
	photoUrl: string
	displayName: string
	email: string | null
	id: string
	chats?: string[]
}
