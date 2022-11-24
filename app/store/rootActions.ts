import { setIndex } from './profile-nav/profileNavSlice'
import { addNotification } from '@/store/notifications/notificationsSlice'
import * as userActions from './user/user.actions'

export const globalActions = {
	...userActions,
	setIndex,
	addNotification
}
