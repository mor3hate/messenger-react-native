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
		addNotification: (state, action: PayloadAction<INotificationItem[]>) => {
			state.notifications = action.payload
		},
		removeNotifications: (state, action: PayloadAction<string>) => {
			state.notifications = state.notifications.filter(
				item => item.recipientId !== action.payload
			)
		}
	}
})

export const { addNotification, removeNotifications } =
	notificationSlice.actions

export default notificationSlice.reducer
