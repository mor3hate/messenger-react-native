export interface INotificationItem {
	type: string
	recipientId: string
	senderId: string
}

export interface INotifications {
	notifications: INotificationItem[]
}
