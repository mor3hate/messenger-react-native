import CreatePost from '@/components/screens/create-post/CreatePost'
import Auth from '@/components/screens/auth/Auth'
import Home from '@/components/screens/home/Home'
import Profile from '@/components/screens/profile/Profile'
import SettingsPage from '@/components/screens/settings/Settings'
import { IRoute } from './navigation.types'

export const userRoutes: IRoute[] = [
	{
		name: 'Auth',
		component: Auth
	},
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Profile',
		component: Profile
	},
	{
		name: 'Settings',
		component: SettingsPage
	},
	{
		name: 'CreatePost',
		component: CreatePost
	}
]
