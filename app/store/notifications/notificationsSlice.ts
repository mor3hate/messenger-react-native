import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	INotificationItem,
	INotifications
} from '@/store/notifications/notifications.interface'

const initialState: INotifications = {
	notifications: []
}

export const notificationSlice = createSlice({
	name: 'notifications',
	initialState,
	reducers: {
		addNotification: (state, action: PayloadAction<INotificationItem>) => {
			state.notifications.push(action.payload)
		},
		removeNotifications: (state, action: PayloadAction<INotificationItem>) => {
			state.notifications.filter(
				notif => notif.recipientId !== action.payload.recipientId
			)
		}
	}
})

export const { addNotification } = notificationSlice.actions

export default notificationSlice.reducer
