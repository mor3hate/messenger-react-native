import { INotificationItem } from '@/store/notifications/notifications.interface'

export interface INotificationItemUI
	extends Pick<INotificationItem, 'recipientId' | 'senderId'> {}
