import { IProfileButtons } from '@/components/screens/profile/profile-buttons/profile-buttons.interface'

export interface IChatHeader extends Pick<IProfileButtons, 'recipientId'> {
	recipientName: string
}
