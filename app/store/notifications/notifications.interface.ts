export interface INotificationItem {
	recipientId: string
	senderId: string
}

export interface INotifications {
	notifications: INotificationItem[]
}
