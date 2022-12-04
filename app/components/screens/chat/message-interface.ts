import { timeObject } from '@/components/screens/create-post/create-post.interface'

export interface IMessage {
	text: string
	from: string
	to: string
	timestamp?: timeObject
	docId?: string
}
