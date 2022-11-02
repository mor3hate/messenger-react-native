import { setIndex } from './profile-nav/profileNavSlice'
import * as userActions from './user/user.actions'

export const globalActions = {
	...userActions,
	setIndex
}
