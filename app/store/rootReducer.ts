import { combineReducers } from '@reduxjs/toolkit'
import userSlice from './user/userSlice'
import notificationSlice from './notifications/notificationsSlice'

export const rootReducer = combineReducers({
	user: userSlice,
	notifications: notificationSlice
})
